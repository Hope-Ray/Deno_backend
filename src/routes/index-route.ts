import { createRoute } from "@hono/zod-openapi";
import { createRouter } from "../lib/create-app.ts";
import { z } from "@hono/zod-openapi";

const router = createRouter().openapi(
  createRoute({
    tags: ["Index"],
    method: "get",
    path: "/",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: "Tasks API Index",
      },
    },
  }),
  (c) => {
    return c.json(
      {
        message: "Task API",
      },
      200
    );
  }
);

export default router;
