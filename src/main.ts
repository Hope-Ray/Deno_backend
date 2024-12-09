import app from "./app.ts";

const PORT = 5000;

// Use Deno's built-in listener
Deno.serve({ port: PORT }, (req) => app.fetch(req));
