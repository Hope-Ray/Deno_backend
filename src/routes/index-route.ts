import { createRoute } from "@hono/zod-openapi";
import { createRouter } from "../lib/create-app.ts";
import jsonContent from "../utils/json-content.ts";
import * as HttpStatusCode from "../utils/http-status-codes.ts";
import createMessageObjectSchema from "../utils/create-message-object.ts";

const router = createRouter().openapi(
  createRoute({
    tags: ["Index"],
    method: "get",
    path: "/",
    responses: {
      [HttpStatusCode.OK]: jsonContent(
        createMessageObjectSchema("Task Api"),
        "Task API Index",
      ),
    },
  }),
  (c) => {
    return c.json(
      {
        message: "Task API",
      },
      HttpStatusCode.OK,
    );
  },
);

export default router;
