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
  //run function after connection is established
  startPrompt();
});


// Prompt User for Choices
const startPrompt = () => {
  inquirer
    .prompt([
      {
        name: "choices",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Update an employee manager",
          "View employees by department",
          "Delete a department",
          "Delete a role",
          "Delete an employee",
          "View department budgets",
          "No Action",``
        ],
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
