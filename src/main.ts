import app from "./app.ts";
import env from "./env.ts";

const PORT = env.PORT;

Deno.serve({ port: PORT }, (req) => app.fetch(req));
