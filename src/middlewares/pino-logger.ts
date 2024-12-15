import { HttpLoggerOptions } from "jsr:@maou-shonen/hono-pino";
import * as hono_pino from "jsr:@maou-shonen/hono-pino";

export function pinoLogger() {
  return hono_pino.pinoLogger({
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}
