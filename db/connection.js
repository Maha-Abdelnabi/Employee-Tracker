const mysql = require("mysql2");


//Connect to database
const connection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Password-mySQL",
    database: "employees_db",
  }
);

// Establishing Connection to database
connection.connect((err) => {
  if (err) throw err;
}
);
module.exports = connection;