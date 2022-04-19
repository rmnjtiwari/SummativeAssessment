const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@786',
  database: 'nodeRegister'
})

db.connect((err) => {
  if(!err)
    console.log('Mysql connected');
  else
    console.log(JSON.stringify(err));
})

module.exports = db;