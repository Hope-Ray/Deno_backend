import { createRouter } from "../../lib/create-app.ts";
import * as routes from "./tasks.routes.ts";
import * as handler from "./tasks.handler.ts";

const router = createRouter().openapi(routes.list, handler.list);

export default router;
