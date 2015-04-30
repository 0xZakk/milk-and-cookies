walkingCat();
body = document.getElementById('body');

function walkingCat() {
  var cat = document.getElementById('cat');
  var catPositionLeft =  cat.style.left;

  if (catPositionLeft.length === 0) {
    newCatPosition = "10px";
  } else if (catPositionLeft === "1100px"){
    newCatPosition = "";
  } else {
    var currentVal = parseInt(catPositionLeft);
    newCatPosition = currentVal + 10 + "px";
  };
  cat.style.left = newCatPosition;
}

var intervalID = window.setInterval(walkingCat, 200);