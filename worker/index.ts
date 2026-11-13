// ============================================================
//  LEVEL 2: the backend (a Cloudflare Worker).
//  - POST /api/waitlist        saves an email in the D1 database
//  - GET  /api/waitlist/count  returns how many people signed up
//  Every other URL is served from the static website in ./dist.
// ============================================================

interface Env {
  ASSETS: Fetcher; // the static website (Astro build output)
  DB: D1Database; // the D1 database (created automatically on deploy)
}

// Creates the table the first time the Worker runs.
// "IF NOT EXISTS" makes it safe to run again and again.
let tableReady: Promise<unknown> | undefined;
function ensureTable(db: D1Database) {
  tableReady ??= db
    .prepare(
      `CREATE TABLE IF NOT EXISTS waitlist (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`,
    )
    .run()
    .catch((err) => {
      tableReady = undefined; // try again on the next request
      throw err;
    });
  return tableReady;
}

function json(data: unknown, status = 200) {
  return Response.json(data, { status });
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function countSignups(db: D1Database) {
  const row = await db.prepare("SELECT COUNT(*) AS count FROM waitlist").first<{ count: number }>();
  return row?.count ?? 0;
}

async function joinWaitlist(request: Request, env: Env) {
  const body = (await request.json().catch(() => null)) as { email?: unknown } | null;
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  await ensureTable(env.DB);
  // "ON CONFLICT DO NOTHING": signing up twice with the same email is not an error.
  await env.DB.prepare("INSERT INTO waitlist (email) VALUES (?) ON CONFLICT(email) DO NOTHING")
    .bind(email)
    .run();

  return json({ ok: true, count: await countSignups(env.DB) });
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      try {
        if (url.pathname === "/api/waitlist" && request.method === "POST") {
          return await joinWaitlist(request, env);
        }
        if (url.pathname === "/api/waitlist/count" && request.method === "GET") {
          await ensureTable(env.DB);
          return json({ count: await countSignups(env.DB) });
        }
        return json({ error: "Not found" }, 404);
      } catch (err) {
        console.error("API error:", err); // visible in Workers Logs
        return json({ error: "Something went wrong on our side. Please try again." }, 500);
      }
    }

    // Not an API call: serve the website.
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
