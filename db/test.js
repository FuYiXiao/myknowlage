const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'world',
});

connection.connect();
console.log('--------------------------connect----------------------------');

const sql = 'SELECT * FROM world.user;';
// 查
connection.query(sql, function (err, result) {
  if (err) {
    console.log('[SELECT ERROR] - ', err.message);
    return;
  }

  console.log('--------------------------SELECT----------------------------');
  console.log(result);
  console.log(
    '------------------------------------------------------------\n\n'
  );
});

connection.end();
