import app from "./app.ts";

const PORT = Number(Deno.env.get("PORT")) || 4000;

Deno.serve({ port: PORT }, (req) => app.fetch(req));
