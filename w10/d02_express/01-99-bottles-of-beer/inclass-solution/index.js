var express = require("express");
var app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", function( req, res ){
  res.render('index', {
    numBottles: 99,
    next: 98
  });
});

app.get("/:numBottles", function( req, res ){
  var next = req.params.numBottles - 1;

  res.render('index', {
    numBottles: req.params.numBottles,
    next: next
  });
});

app.listen(3000, function(){
  console.log("listening on 3000");
});