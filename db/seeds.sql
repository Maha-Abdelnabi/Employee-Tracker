-- DEPARTMENT SEEDS -----
INSERT INTO department(name)
VALUES("Engineering"), ("Sales"), ("Finance"), ("Legal"), ("Marketing");

-- EMPLOYEE ROLE SEEDS -------
INSERT INTO role(title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 10000, 2), 
('Finanical Analyst', 150000, 2),
('Marketing Coordindator', 70000, 3), 
('Sales Lead', 90000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4);

-- EMPLOYEE SEEDS -------
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Malek', 'Miller', 2, null),
('David', 'Anderson', 1, 1),
('Mary', 'Brown', 4, null),
('Ashley', 'Jones', 3, 8),
('Tyler', 'Moore', 6, null),
('Ana', 'Sanchez', 9, 5),
('Luke', 'Allen', 7, null),
('Sarah', 'Green', 8, 7);