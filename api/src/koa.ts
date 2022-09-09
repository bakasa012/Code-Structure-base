import Router from "@koa/router";
import Koa, { DefaultState, Context } from "koa";
import helmet from "koa-helmet";
import bodyParser from "koa-bodyparser";
import compress from "koa-compress";
import logger from "koa-logger";
import { apiRouter } from "./routes";
const app = new Koa();
app.use(helmet);
app.use(
  bodyParser({
    jsonLimit: "10mb",
  })
);
app.use(compress);
app.use(logger);
const router = new Router<DefaultState, Context>();
router.use(apiRouter);
