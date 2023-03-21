//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
//const db = require("./db");

// const connectionJs = require("./db/connection");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3001,
  // MySQL username,
  user: "root",
  // MySQL password
  password: "Password-mySQL",
  database: "employees_db",
});

// Establishing Connection to database
connection.connect((err) => {
  if (err) throw err;
});


// Prompt User for Choices
function startPrompt() {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        {name: "View all departments",
         value: "VIEW_DEPARTMENTS" },
        {name:"View all roles",
        value:"VIEW_ROLES"},
        {name:"View all employees",
        value:"VIEW_EMPLYEES"},
        {name:"Add a department",
        value:"ADD_DEPARTMENT"},
        {name:"Add a role",
        value:"ADD_ROLE"},
        {name:"Add an employee",
        value:"ADD_EMPLYEE"},
        {name:"Update an employee role",
        value:"UPDATE_ROLE"},
        {name:"Quit"}
      ],
    })
    .then((answers) => {
        switch (answers.choice) {
          case "VIEW_DEPARTMENTS":
            viewDepartments();
            break;
          case "VIEW_ROLES":
            viewRoles();
            break;
          case "VIEW_EMPLYEES":
            viewEmplyees();
            break;
          case "ADD_DEPARTMENT":
            addDepartment();
            break;
          case "ADD_ROLE":
            addRole();
            break;
          case "ADD_EMPLYEE":
            addEmployee();
            break;
          case "UPDATE_ROLE":
            updateRole();
            break;
          default:
            quit();
        }
     })
    
}
    

startPrompt();