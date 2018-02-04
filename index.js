const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
var $ = require('jQuery');

var ven = require('./venues.json')

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});

app.get("/testingss", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/testing.html");
});

app.get("/districts", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index2.html");
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

// var mysql = require('mysql')
// var con = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'shirleykabir',
//   password : 'Zanifur1997',
//   database : 'bescene'
// });

var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
    host:'localhost',
    user:'shirleykabir',
    password:'Zanifur1997',
    database:'bescene'
  });

// mysqlJson.query("SELECT * FROM neighborhoods", function(err, response) {
//     if (err) throw err;
//     console.log(response);
// });

app.get('/district_data', function (request, response) {
  mysqlJson.connect(function(err) {
    if (err) throw err;
    mysqlJson.query("SELECT * FROM neighborhoods", function(err, response) {
        if (err) throw err;
        console.log(response);
    });
  });
});

app.get('/test', function(req, res, next) {
  mysqlJson.connect(function(err) {
    if (err) throw err;
    mysqlJson.query("SELECT * FROM neighborhoods", function(err, response) {
        if (err) throw err;
        console.log(response);
        res.json(response);
    });
  });

});


app.get('/venue_data', function(req, res, next) {
  res.json(ven);

});
app.get("/venues", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/blank.html");
});

// app.get('/district_data', function (request, response) {
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query('SELECT * FROM neighborhoods ',
//     function (error, rows, fields) {
//       var objs = [];
//       for (var i = 0;i < rows.length; i++) {
//           objs.push({id: rows[i].id, name: rows[i].name, zipcode: rows[i].zipcode, img: rows[i].img});
//       }
//       con.end();
//       response.end(JSON.stringify(objs));
//     });
//   });
// });

app.use(express.static(__dirname + '/public'));
