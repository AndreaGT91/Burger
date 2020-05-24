require("dotenv").config();
const mysql = require("mysql");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // user: process.env.USER,
  user: "root",
  password: process.env.PASSWORD,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;