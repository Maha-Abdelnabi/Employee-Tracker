//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

// create connection to database
const connection = mysql.createConnection({
  host: "localhost",
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
        { name: "View all departments", value: "VIEW_DEPARTMENTS" },
        { name: "View all roles", value: "VIEW_ROLES" },
        { name: "View all employees", value: "VIEW_EMPLYEES" },
        { name: "Add a department", value: "ADD_DEPARTMENT" },
        { name: "Add a role", value: "ADD_ROLE" },
        { name: "Add an employee", value: "ADD_EMPLYEE" },
        { name: "Update an employee role", value: "UPDATE_ROLE" },
        { name: "Quit", value: "QUIT" },
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
          viewEmployees();
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
        case "QUIT":
          connection.end();
          break;
      }
    });
}

// function to view all departments
viewDepartments = () => {
  console.log("Showing all departments...\n");
  const query = `SELECT department.id AS id, department.name AS department FROM department`;
//callback that called the value we want to return
  connection.query(query, (err, rows) => {
    if (err) throw err;
    //to show the result in the tables
    console.table(rows);
    startPrompt();
  });
};

// function to view roles
viewRoles = () => {
  console.log("Showing all roles...\n");

  const query = `SELECT role.id, role.title, department.name AS department
               FROM role
               LEFT JOIN department ON role.department_id = department.id`;

  connection.query(query, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    startPrompt();
  });
};

// function to view employees
viewEmployees = () => {
  console.log("Showing all employees...\n");
  const query = `SELECT employee.id, 
                      employee.first_name, 
                      employee.last_name, 
                      role.title, 
                      department.name AS department,
                      role.salary, 
                      CONCAT (manager.first_name, " ", manager.last_name) AS manager
                      FROM employee
                      LEFT JOIN role ON employee.role_id = role.id
                      LEFT JOIN department ON role.department_id = department.id
                      LEFT JOIN employee manager ON employee.manager_id = manager.id`;

  connection.query(query, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    startPrompt();
  });
};

// function to add department
addDepartment = () => {
  // Prompt user for name of department
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDept",
        message: "What department do you want to add?",
      },
    ])
    // add department to the table
    .then((answer) => {
      const query = `INSERT INTO department (name)
                  VALUES (?)`;
      connection.query(query, answer.addDept, (err, result) => {
        if (err) throw err;
        //
        console.log("Added " + answer.addDept + " to departments!");

        viewDepartments();
      });
    });
};

// function to add a role
addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role",
        message: "What role do you want to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of this role?",
      },
    ])
    .then((answer) => {
      const params = [answer.role, answer.salary];

      // grab dept from department table
      const roleSql = `SELECT name, id FROM department`;

      connection.query(roleSql, (err, data) => {
        if (err) throw err;

        const dept = data.map(({ name, id }) => ({ name: name, value: id }));

        inquirer
          .prompt([
            {
              type: "list",
              name: "dept",
              message: "What department is this role in?",
              choices: dept,
            },
          ])
          .then((deptChoice) => {
            const dept = deptChoice.dept;
            params.push(dept);

            const sql = `INSERT INTO role (title, salary, department_id)
                        VALUES (?, ?, ?)`;

            connection.query(sql, params, (err, result) => {
              if (err) throw err;
              console.log("Added" + answer.role + " to roles!");

              viewRoles();
            });
          });
      });
    });
};

// function to add an employee
addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "fistName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
    ])
    .then((answer) => {
      const params = [answer.fistName, answer.lastName];

      // grab roles from roles table
      const roleSql = `SELECT role.id, role.title FROM role`;

      connection.query(roleSql, (err, data) => {
        if (err) throw err;

        const roles = data.map(({ id, title }) => ({ name: title, value: id }));

        inquirer
          .prompt([
            {
              type: "list",
              name: "role",
              message: "What is the employee's role?",
              choices: roles,
            },
          ])
          .then((roleChoice) => {
            const role = roleChoice.role;
            params.push(role);

            const managerSql = `SELECT * FROM employee`;

            connection.query(managerSql, (err, data) => {
              if (err) throw err;

              const managers = data.map(({ id, first_name, last_name }) => ({
                name: first_name + " " + last_name,
                value: id,
              }));

              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "manager",
                    message: "Who is the employee's manager?",
                    choices: managers,
                  },
                ])
                .then((managerChoice) => {
                  const manager = managerChoice.manager;
                  params.push(manager);

                  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                    VALUES (?, ?, ?, ?)`;

                  connection.query(sql, params, (err, result) => {
                    if (err) throw err;
                    console.log("Employee has been added!");

                    viewEmployees();
                  });
                });
            });
          });
      });
    });
};

// function to update an employee
updateRole = () => {
  // get employees from employee table
  const employeeSql = `SELECT * FROM employee`;

  connection.query(employeeSql, (err, data) => {
    if (err) throw err;

    const employees = data.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "Which employee would you like to update?",
          choices: employees,
        },
      ])
      .then((empChoice) => {
        const employee = empChoice.name;
        const params = [];
        params.push(employee);

        const roleSql = `SELECT * FROM role`;

        connection.promise().query(roleSql, (err, data) => {
          if (err) throw err;

          const roles = data.map(({ id, title }) => ({
            name: title,
            value: id,
          }));

          inquirer
            .prompt([
              {
                type: "list",
                name: "role",
                message: "What is the employee's new role?",
                choices: roles,
              },
            ])
            .then((roleChoice) => {
              const role = roleChoice.role;
              params.push(role);

              let employee = params[0];
              params[0] = role;
              params[1] = employee;

    

              const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;

              connection.query(sql, params, (err, result) => {
                if (err) throw err;
                console.log("Employee has been updated!");

                viewEmployees();
              });
            });
        });
      });
  });
};

startPrompt();
