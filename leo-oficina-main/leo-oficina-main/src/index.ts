import { publicRoutes } from "./routes/public";
import { init } from "./services/express";

const app = init();

const _public = publicRoutes(app);

_public.Home();
