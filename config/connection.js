var mysql = require("mysql");

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "trilogy",
  password: "password123",
  database: "burgers_db"
});
}

// var connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-02.cleardb.net",
//   port: 3306,
//   user: "b3b0c71b7e8440",
//   password: "8bccd8dd",
//   database: "heroku_1a3abefeca58a10"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
