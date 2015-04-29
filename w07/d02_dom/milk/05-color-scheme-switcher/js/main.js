// function addEvents(){
//    var body_style = document.body.style;
//    var redButton = document.getElementById("redButton");
//    var whiteButton = document.getElementById("whiteButton")
//    var blueButton = document.getElementById("blueButton")
//    var yellowButton = document.getElementById("yellowButton")

//    redButton.addEventListener("click", function(){
//     body_style.backgroundColor = "red" })
//    whiteButton.addEventListener("click", function(){
//     body_style.backgroundColor = "white" })
//    blueButton.addEventListener("click", function(){
//     body_style.backgroundColor = "blue" })
//    yellowButton.addEventListener("click", function(){
//     body_style.backgroundColor = "yellow" })
// }

var buttons = document.querySelectorAll("#switcher li");
var body   = document.querySelector("body");


for(var x = 0; x < buttons.length; x++){
  var button = buttons[x];
  button.addEventListener("click", function(poodle){
    console.log(poodle);
    var styles = window.getComputedStyle(poodle.target);
    var color = styles.getPropertyValue("background-color");
    body.style.backgroundColor = color;
  })
}







