import Router from "@koa/router";
import { DefaultState, Context } from "koa";
const router = new Router<DefaultState, Context>({ prefix: "/admin" });

export default router.routes();
