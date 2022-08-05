const dotenv = require("dotenv");
dotenv.config();

const {
  APP_PORT,
  MYSQL_PORT,
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_USER
} = process.env;

module.exports = {
  APP_PORT,
  MYSQL_PORT,
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_USER
};
