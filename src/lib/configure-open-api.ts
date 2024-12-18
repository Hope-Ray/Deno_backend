import { OpenAPIHono } from "@hono/zod-openapi";
import {apiReference} from "@scalar/hono-api-reference"
import packageJson from "../../deno.json" with { type: "json" }

export default function configureOpenApi(app: OpenAPIHono) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJson.version,
      title: "TASK API",
    },
  });

  app.get(
    "/reference",
    apiReference({
      theme: "kepler",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
    }),
  );
}
