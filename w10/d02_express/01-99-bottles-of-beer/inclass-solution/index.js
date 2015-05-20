<<<<<<< HEAD
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
=======
var express = require("express")
var app = express()
var routes = require("./routes")

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))
app.get("/:numBottles?", routes.index )
>>>>>>> 6011b67c7a6f98653b7eae7ba3914dc527a1a359

app.listen(3000, function(){
  console.log("listening on 3000");
});