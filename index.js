const mysql = require("mysql");
const inquirer = require("inquirer");

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

function postItemForAuction() {
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
  ]).then(({ action, bid }) => {
    if (action === "View All Employees") {
      viewAllEmployees();
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

  function init() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to search for?",
          choices: [
            "Songs by Artist",
            "Songs by Title",
            "Artists appearing more than once",
            "Find songs by year",
            "Exit",
          ],
          name: "userChoice",
        },
      ])
      .then(({ userChoice }) => {
        switch (userChoice) {
          case "Songs by Artist":
            findSongByArtist();
            break;
          case "Songs by Title":
            findSongByTitle();
            break;
          case "Artists appearing more than once":
            findArtistsMoreThanOnce();
            break;
          case "Find songs by year":
            findSongsByYearRange();
            break;
          default:
            exit();
        }
      });
  }

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