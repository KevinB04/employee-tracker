const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

port: 3000,

user: "root",

password: "RememberThis!4",
database: "great_bay",
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
    init();
  });

  function postItemForAuction() {
      inquirer.prompt([
        {
            type: "input",
            message: "What would you like to do?",
            name: "action",
            choice: ["View All Employees", ]
        },
        {
            type: "input",
            message: "Which?",
            name: "bid"
        },
    ]).then(({name, bid}) => {
        connection.query(
            `INSERT INTO items (name, bid)
            VALUES (?, ?);`,
            [name, bid],
            (err, data) => {
                if (err) throw err;
                console.log(data);
                init();
            }
        );
    });
}


    
      connection.query(
          `INSERT INTO items (name, bid)
          VALUES ("Football", 10);`,
          (err, data) => {
              if (err) throw err;
              console.log(data);
          }
      );
  }

  function init() {
    inquirer
      .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: ["ADD AN ITEM FOR AUCTION", "EXIT"],
        },
      ]).then(({ action }) => {
          if (action === "Post an item") {
              readOptionlist();
          } else if (action === "Bid on an item") {
              readOptionlist();
          }
      });