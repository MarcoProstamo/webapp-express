import mysql from "mysql2";

// # Connection to DB
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const connection = mysql.createConnection({
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
});

export { connection };
