const express = require('express')
const app = express()
const port = 3000

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'shirleykabir',
  password : 's3kreee7',
  database : 'my_db'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
