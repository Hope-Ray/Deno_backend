import createApp from "./lib/create-app.ts";
import configureOpenApi from "./lib/configure-open-api.ts";
import index from "./routes/index-route.ts";

const app = createApp();

const routes = [index];

configureOpenApi(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
