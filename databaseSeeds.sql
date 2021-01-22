USE employeeTracker_DB;

INSERT INTO department (name)
VALUES ("Management");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal", 85000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineering", 90000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing", 65000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources", 70000, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("James", "Bradley", 57);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ashley", "Brisbon", 104);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Neil", "Brown", 117);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Shaun", "Oppedisano", 95);
INSERT INTO employee (first_name, last_name, role_)
VALUES ("Erin", "Kelly", 125);