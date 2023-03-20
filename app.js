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
      const { choices } = answers;

      if (choices === "View all departments") {
        
      }

      if (choices === "View all roles") {
        
      }

      if (choices === "View all employees") {
        
      }

      if (choices === "Add a department") {
        
      }

      if (choices === "Add a role") {
        
      }

      if (choices === "Add an employee") {
        
      }

      if (choices === "Update an employee role") {
        
      }

      if (choices === "Update an employee manager") {
       
      }

      if (choices === "View employees by department") {
        
      }

      if (choices === "Delete a department") {
        
      }

      if (choices === "Delete a role") {
        
      }

      if (choices === "Delete an employee") {
        
      }

      if (choices === "View department budgets") {
        
      }

      if (choices === "No Action") {
        
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
