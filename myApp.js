var express = require('express');
var app = express();
var bodyParser = require("body-parser");

//Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Get Data from POST Requests
app.post('/name', function (req, res) {
  var fulllName = req.body.first + " " + req.body.last
  console.log(fulllName)
  res.json({name: fulllName})
})




console.log("Hello World");
app.use("/public", express.static(__dirname + "/public"));

//Challenge: Implement a Root-Level Request Logger Middleware
/*
app.use("/", function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip)
  next()
});
*/

//Challenge: Chain Middleware to Create a Time Server
app.get('/now', function (req, res, next) {
  //add new middleware property to request object
  req.time = new Date().toString();
  next();
},
  function (req, res) {
  //access new property and output json
  res.send({
    time : req.time
  });
});

//Get Route Parameter Input from the Client
app.get('/:word/echo', function(req, res){
  //send a json object with the word
  res.send({
    echo: req.params.word
  });
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
app.get("/json", function(req, res) {
    var response = "Hello json";
      if (process.env['MESSAGE_STYLE'] === "uppercase") {
        response = response.toUpperCase();
      }
  res.json({
    "message": response});
 });

//Get Query Parameter Input from the Client
app.get('/name', function(req, res) {
  console.log(req.query.first + " " + req.query.last )
  res.json({name: req.query.first + " " + req.query.last})
})































 module.exports = app;
