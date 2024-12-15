import { Context, ErrorHandler, Env } from "npm:hono";
import type { StatusCode } from "npm:hono/utils/http-status";

import { INTERNAL_SERVER_ERROR, OK } from "./http-status-codes.ts";

const onError: ErrorHandler<Env> = (err, c: Context<Env>) => {
  const currentStatus =
    "status" in err ? err.status : c.newResponse(null).status;
  const statusCode =
    currentStatus !== OK
      ? (currentStatus as StatusCode)
      : INTERNAL_SERVER_ERROR;

  const env = Deno.env.get("NODE_ENV");
  console.log("ENV", env);

  return c.json(
    {
      message: err.message,
      stack: env === "production" ? undefined : err.stack,
    },
    statusCode
  );
};

export default onError;
