# Employee-Tracker
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Walkthrough Video link

[Employee Tracker Walkthrough Video](https://drive.google.com/file/d/1Mr5qsVYdjRaDMNzKvt4mMTY2xcY15_OR/view)
 ## Description
This project is to building a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.
## Table Of Contents

* [Install](#install)
* [Usage](#usage)
* [License](#license)



## Install

- Clone from GitHub.
- Open project directory, then npm install to install all required dependencies.

## Usage

GIVEN a command-line application that accepts user input

WHEN start the application
THEN presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

WHEN choose to view all departments
THEN presented with a formatted table showing department names and department ids.

WHEN choose to view all roles
THEN  presented with the job title, role id, the department that role belongs to, and the salary for that role.

WHEN choose to view all employees
THEN  presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

WHEN choose to add a department
THEN  prompted to enter the name of the department and that department is added to the database.

WHEN choose to add a role
THEN  prompted to enter the name, salary, and department for the role and that role is added to the database.

WHEN choose to add an employee
THEN  prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.

WHEN choose to update an employee role
THEN  prompted to select an employee to update and their new role.

and this information is updated in the database 


## License
[The MIT License](https://opensource.org/licenses/MIT)
