import { OpenAPIHono } from "@hono/zod-openapi";
import { NOT_FOUND as NOT_FOUND_MESSAGE } from "./utils/http-status-phrases.ts";
import { NOT_FOUND } from "./utils/http-status-codes.ts";
import onError from "./utils/on-error.ts";
import { pinoLogger } from "./middlewares/pino-logger.ts";

const app = new OpenAPIHono();

app.use(pinoLogger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(422);

  throw new Error("Oh no!");
});

app.notFound((c) => {
  return c.json(
    {
      message: `${NOT_FOUND_MESSAGE} - ${c.req.path}`,
    },
    NOT_FOUND
  );
});

app.onError(onError);

export default app;
