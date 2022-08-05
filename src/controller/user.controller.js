const service = require("../service/user.service");

class UserController {
  async CreateUser(ctx, next) {
    // 获取接口传入的数据
    const user = ctx.request.body;
    const result = await service.CreateUser(user);
    ctx.body = result;
  }
}

module.exports = new UserController();
