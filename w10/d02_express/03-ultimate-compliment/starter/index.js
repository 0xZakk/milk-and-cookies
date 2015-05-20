var express = require("express");
var app = express();
var compliments = require("./models/compliment");
var colors = require("./models/color");

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", function( req, res ){
  var rand_compliment = Math.floor((Math.random() * compliments.length));
  var rand_color = Math.floor((Math.random() * compliments.length));
  var compliment = compliments[rand_compliment];
  var color = colors[rand_color];
  res.render("index", {compliment: compliment, color: color});
});

app.get("/:name", function( req, res ){
  var name = params.name;
  res.render("index", {compliment: compliment, color: color, name: name});
});

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/");
});