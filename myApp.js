var express = require('express');
var app = express();


console.log("Hello World");
app.use("/public", express.static(__dirname + "/public"));

//Challenge: Implement a Root-Level Request Logger Middleware
app.use("/", function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip
    //method path - ip.
    )
  next()
})

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








































 module.exports = app;
