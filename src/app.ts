import createApp from "./lib/create-app.ts";
import configureOpenApi from "./lib/configure-open-api.ts";
import index from "./routes/index-route.ts";
import tasks from "./routes/tasks/tasks.index.ts";

const app = createApp();

const routes = [index, tasks];

configureOpenApi(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
