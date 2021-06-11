var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "CaiJen2513@",
  database: "lcj",
});

module.exports = connection;
