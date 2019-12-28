var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'uche',
  password: 'Password@11',
  database: 'shopapp_db'
})

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;