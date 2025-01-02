import { drizzle } from "npm:drizzle-orm/libsql";
import { createClient } from "npm:@libsql/client";
import env from "../env.ts";

const client = createClient({
  url: env.DATABASE_URL,
  authToken: env.DATABASE_AUTH_TOKEN,
});
const db = drizzle(client);

export default db;
