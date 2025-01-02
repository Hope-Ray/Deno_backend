import { ListType } from "./tasks.routes.ts";
import { AppRouteHandler } from "../../lib/types.ts";

export const list: AppRouteHandler<ListType> = (c) => {
  return c.json([
    {
      name: "LEARN hono",
      done: false,
    },
  ]);
};
