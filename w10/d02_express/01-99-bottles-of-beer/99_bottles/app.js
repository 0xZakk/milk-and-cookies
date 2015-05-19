var express = require("express");
var app = express();

app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.render('index');
});


app.get("/0", function(req, res){
  res.send("Oh no! 0 bottles of beer on the wall! :( <a href='/99'>Start over?</a>");
});

app.get("/:number_of_bottles", function(req, res){
  res.send(req.params.number_of_bottles + " bottles of beer on the wall <a href='" + (req.params.number_of_bottles - 1 )+ "'>Take one down, pass it around</a>");
});

app.listen(3000, function(){
  console.log("Hey! Your app is listening on port 3000");
});