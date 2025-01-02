import type { PinoLogger } from "hono-pino";
import { RouteConfig, RouteHandler } from "@hono/zod-openapi";

export interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<
  R,
  AppBindings
>;
