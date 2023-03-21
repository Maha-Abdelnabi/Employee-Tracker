//Dependencies
const inquirer = require("inquirer");

const db = require("./db")

const connectionJs = require("./db/connection");
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
            viewDepartments()
            break;
          case y:
            // code block
            break;
          default:
          quit();
        }
     })
    
}
    //   const { choices } = answers;

    //   if (choices === "View all departments") {
    //     allDepartments();
    //   }

    //   if (choices === "View all roles") {
    //   }

    //   if (choices === "View all employees") {
    //   }

    //   if (choices === "Add a department") {
    //   }

    //   if (choices === "Add a role") {
    //   }

    //   if (choices === "Add an employee") {
//       }

//       if (choices === "Update an employee role") {
//       }

//       if (choices === "Update an employee manager") {
//       }

//       if (choices === "View employees by department") {
//       }

//       if (choices === "Delete a department") {
//       }

//       if (choices === "Delete a role") {
//       }

//       if (choices === "Delete an employee") {
//       }

//       if (choices === "View department budgets") {
//       }

//       if (choices === "No Action") {
//       }
//     });
// };

// //function to show all departments 
// allDepartments = () => {
//   console.log('Showing all departments...');
 
//     startPrompt();
  //};








//     .catch((error) => {
//       if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//       } else {
//         // Something else went wrong
//       }
//     });
// }
//     }
startPrompt();