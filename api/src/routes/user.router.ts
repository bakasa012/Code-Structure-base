import Router from "@koa/router";
import { DefaultState, Context } from "koa";
import UserController from "../controllers/user.controler";

const router = new Router<DefaultState, Context>({ prefix: "/api/user" });
const userController = new UserController();
router.get("/", userController.getUserAll);

export default router;
