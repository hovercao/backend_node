const connection = require("../app/database");

class UserService {
  //用户信息存储到数据库
  async CreateUser(user) {
    const { name, password } = user;
    const statement = `INSERT INTO users (name,password) VALUES(?,?);`;
    const result = await connection.execute(statement, [name, password]);

    return result;
  }
}

module.exports = new UserService();
