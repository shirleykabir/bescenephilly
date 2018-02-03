const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
var $ = require('jQuery');

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});

app.get("/district", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index2.html");
});

app.get('/districts', function (request, response) {
  connection.connect();

  connection.query('SELECT * FROM neighborhoods', function(err, rows, fields)
  {
      connection.end();

      if (err) throw err;

      response.sendFile(__dirname+"/index2.html");
      response.json(rows);

  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


app.use(express.static(__dirname + '/public'));


var mysql = require('mysql')
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'shirleykabir',
  password : 'Zanifur1997',
  database : 'bescene'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM neighborhoods", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
