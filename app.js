//Dependencies
const inquirer = require("inquirer");

//const db = require("./db")

//const connectionJs = require("./db/connection");
const cTable = require("console.table");




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
        // "Update an employee manager",
        // "View employees by department",
        // "Delete a department",
        // "Delete a role",
        // "Delete an employee",
        // "View department budgets",
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