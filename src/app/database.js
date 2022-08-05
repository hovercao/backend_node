const mysql = require("mysql2");
const config = require("./config");

const connection = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE
});

connection.getConnection((err, conn) => {
  conn.connect(err => {
    console.log("connection succeeded", err);
  });
});

module.exports = connection.promise();
