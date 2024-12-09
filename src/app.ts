import { OpenAPIHono } from "@hono/zod-openapi";
import { NOT_FOUND as NOT_FOUND_MESSAGE } from "./utils/http-status-phrases.ts";
import { NOT_FOUND } from "./utils/http-status-codes.ts";

const app = new OpenAPIHono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.notFound((c) => {
  return c.json(
    {
      message: `${NOT_FOUND_MESSAGE} - ${c.req.path}`,
    },
    NOT_FOUND
  );
});

export default app;
