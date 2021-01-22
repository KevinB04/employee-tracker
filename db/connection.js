const mysql = require("mysql");
const util = require("util");
require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: process.env.MYSQL_PASS,
    database: "employeeTracker_db",
  });
  
  connection.connect(function (err) {
    if (err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
    
    
  });

  connection.query = util.promisify(connection.query)

  module.exports = connection;