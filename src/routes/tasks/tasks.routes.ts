import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "../../utils/http-status-codes.ts";
import jsonContent from "../../utils/json-content.ts";

export const list = createRoute({
  tags: ["Tasks"],
  method: "get",
  path: "/tasks",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(
        z.object({
          name: z.string(),
          done: z.boolean(),
        }),
      ),
      "The List of tasks",
    ),
  },
});

export type ListType = typeof list;
