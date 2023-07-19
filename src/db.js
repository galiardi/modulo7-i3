import mysql from 'mysql2';

const pool = mysql.createPool({
  user: 'root',
  password: 'secret',
  host: 'localhost',
  port: 3306,
  database: 'individual3',
});

const promisePool = pool.promise();

export { promisePool };
