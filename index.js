const mysql = require("mysql");
const inquirer = require("inquirer");
const { printTable } = require("console-table-printer")
const DB = require("./db/db");
const { findAllDepartments } = require("./db/db");

function init() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "View All Departments",
        "Add Department",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager"],
    }])
    .then(function(userChoice) {
      switch (userChoice.action) {
        case "View All Employees":
          viewAllEmployees();
          break;

        case "View All Departments":
          viewAllDepartments();
          break;

          case "Add Department":
            addDepartment();
            break;

        case "View All Employees By Manager":
          viewByManager();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;
          
        case "Update Employee Manager":
          updateEmployeeManager();
          break;

        default:
          process.exit();
      }
    })
  }

  function viewAllDepartments() {
    DB.findAllDepartments().then(function (res){
      printTable(res);
      console.log(res);
    })
  }

  function viewAllEmployees() {
    DB.findAllEmployees().then(function (res){
      printTable(res);
      console.log("Hi");
    })
  }

  async function addRole(){
    const departments = await DB.findAllDepartments();

    const departmentChoices = departments.map(({ id, name }) => ({
      name: name,
      value: id
    }));
    inquirer.prompt([
      {
        type: "input",
        message: "What is the name of the role?",
        name: "role"
      },
      {
        type: "input",
        message: "What is the salary for the role?",
        name: "salary"
      }
    ])
  }

  function addDepartment() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the department name?",
        name: "Depname"
      }
    ]).then(function(answers){
      DB.addDepartment(answers.Depname).then(function(response){
        viewAllDepartments();
        printTable(res);
      })
    })
  }

  function addEmployee() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "Empname"
      }
    ]).then(function(answers){
      DB.addEmployee(answers.Empname).then(function(response){
        viewAllEmployees();
      })
    })
  }

  function addRole() {
    inquirer.prompt([
      {
        type: "input",
        message: "What role would you like to add?",
        name: "role",
        choices: ["Manager", "Supervisor", "Associate"]
      }
    ]).then(function(answers){
      DB.addRole(answers.role).then(function(response){

      })
    })
  }

  

init();