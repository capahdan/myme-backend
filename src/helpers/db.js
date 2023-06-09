const mysql = require("mysql")
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env
var connection = mysql.createConnection(
  {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    insecureAuth : true
  }
)

connection.connect(function (err) {
  if (err)
    throw err
  console.log("Connected To Database!")
})

module.exports = connection