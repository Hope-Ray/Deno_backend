import * as hono_pino from "jsr:@maou-shonen/hono-pino";
import pino from "pino";
import pretty from "pino-pretty";

export function pinoLogger() {
  return hono_pino.pinoLogger({
    // pino: pino(
    //   {
    //     level: Deno.env.get("LOG_LEVEL") || "info",
    //   },
    //   Deno.env.get("DENO_ENV") === "production" ? undefined : pretty()
    // ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}
