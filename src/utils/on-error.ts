import { Context, ErrorHandler, Env } from "npm:hono";
import type { StatusCode } from "npm:hono/utils/http-status";
import env from "../env.ts";

import { INTERNAL_SERVER_ERROR, OK } from "./http-status-codes.ts";

const onError: ErrorHandler<Env> = (err, c: Context<Env>) => {
  const currentStatus =
    "status" in err ? err.status : c.newResponse(null).status;
  const statusCode =
    currentStatus !== OK
      ? (currentStatus as StatusCode)
      : INTERNAL_SERVER_ERROR;

  const env1 = env.DENO_ENV;

  return c.json(
    {
      message: err.message,
      stack: env1 === "production" ? undefined : err.stack,
    },
    statusCode
  );
};

export default onError;
