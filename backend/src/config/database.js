const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

module.exports = dbPool.promise();
