const Router = require("koa-router");
const { CreateUser } = require("../controller/user.controller");

const useRouter = new Router({ prefix: "/users" });
useRouter.post("/", CreateUser);

module.exports = useRouter;
