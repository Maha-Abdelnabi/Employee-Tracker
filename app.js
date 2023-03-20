//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

// Connect to database
const db = mysql.createConnection(
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
db.connect((err) => {
    if (err) throw err;

    // Start main menu function

    console.log(" WELCOME TO EMPLOYEE TRACKER ");
    
});
