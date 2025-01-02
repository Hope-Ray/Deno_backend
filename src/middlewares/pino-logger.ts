import * as hono_pino from "hono-pino";

export function pinoLogger() {
  return hono_pino.pinoLogger({
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}
