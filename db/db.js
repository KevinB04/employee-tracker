const connection = require("./connection")
class DB {
    constructor(connection) {this.connection = connection}

    findAllDepartments(){
        return this.connection.query("SELECT * FROM department")
    }

    addDepartment(name){
        return this.connection.query("INSERT INTO department SET ?", {
            name: name
        })
    }

    addEmployee(firstName, lastName, role_id) {
        return this.connection.query("INSERT INTO employee SET ?", {
            first_name: firstName,
            last_name: lastName,
            role_id: role_id
        })
    }

    findAllEmployees(){
        return this.connection.query("SELECT * FROM employee")
    }
        
    findAllRoles(){
        return this.connection.query("SELECT * FROM role")
    }

    addEmployeeRole(title, salary, department_id){
        return this.connection.query("INSERT INTO role SET ?", {
            title: title,
            salary: salary,
            department_id: department_id
        })
    }

    showEmployeesByDepartment(){
        return this.connection.query("SELECT employee.first_name, employee.last_name, employee.role_id FROM employee")
    }
}

module.exports = new DB(connection);