const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "RememberThis!4",
  database: "employeeTracker_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`connected as id: ${connection.threadId}`);
  // init();
  postItemForAuction();
});

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
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager"],
    }
    .then(({ userChoice }) => {
      switch (userChoice) {
        case "View All Employees":
          viewAllEmployees();
          break;

        case "View All Employees By Department":
          viewAllDepartments();
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
          exit();
      }
    });
}
    }
    console.table(action);

  });
};

function viewAllEmployees() {

}
connection.query(

  //             `INSERT INTO items (name, bid)
  //             VALUES (?, ?);`,
  //             [name, bid],
  //             (err, data) => {
  //                 if (err) throw err;
  //                 console.log(data);
  //                 init();
  //             }
  //         );
  //     });
  // }

  

//       connection.query(
//           `INSERT INTO items (name, bid)
//           VALUES ("Football", 10);`,
//           (err, data) => {
//               if (err) throw err;
//               console.log(data);
//           }
//       );
//   }

  function init() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do?",
          name: "action",
          choices: [
        },
      ]).then(({ action }) => {
//           if (action === "Post an item") {
//               readOptionlist();
//           } else if (action === "Bid on an item") {
//               readOptionlist();
//           }
//       });