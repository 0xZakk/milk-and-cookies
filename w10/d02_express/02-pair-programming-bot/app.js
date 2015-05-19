var express = require("express");
var routes = require("./routes");
var hbs = require("hbs");
var app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get("/", routes.index);
app.get("/write_test", routes.write_test);
app.get("/pass", routes.pass);
app.get("/refactor", routes.refactor);
app.get("/write_code", routes.write_code);
app.get("/do_refactor", routes.do_refactor);
app.get("/new_feature", routes.new_feature);


app.listen(3000, function(){
  console.log("app listening on port 3000");
});

