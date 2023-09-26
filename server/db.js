const { createPool } = require("mysql2/promise");
const { DB_HOST, DB_PORT, DB_USER, DB_NAME } = require("./config.js");

const pool = createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  database: DB_NAME,
});

module.exports = pool;
