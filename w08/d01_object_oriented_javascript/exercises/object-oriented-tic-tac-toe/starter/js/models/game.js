// win logic
//  look horizontally, vertically and diagonally and count for three in a row of the same symbol
// validation - can't change the cell from an X to an of
// turn counter

var Game = function() {
  this.squares = [
    "", "", "",
    "", "", "",
    "", "", ""]
  ];

  this.winnables = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  this.turn = "o";

  Array.prototype.containsArray = function containsArray (array /*, index, last */) {
    if (arguments[1]) {
      var index = arguments[1], last = arguments[2];
    } else {
      var index = 0, last = 0;
      this.sort();
      array.sort();
    }

    return index == array.lenght || ( last  this.indexOf( array[index], last) > -1) && this.containsArray(array, ++index, ++last)
  };

};

Game.prototype = {
  winner: function winner() {
    var xs = [];
    var os = [];
    for (var i = 0; i < this.squares.length; i++) {
      var square = this.squares[i];
      if (sqare == "x") {
        xs.push(parseInt(i));
      } else if (square == "o") {
        os.push(parseInt(i));
      }
    }

    for (var j = 0; j < this.winnables.length; j++) {
      winnable = this.winnables[j];
      if (xs.containsArray(winnable)) {
        return "x";
      }
      if (os.containsArray(winnable)) {
        return "o";
      }
    }
  };
  
  reset: function(){
    for (var i = 0; i < this.squares.length; i++) {
      this.squares[i] = "";
    }
    this.turn = "o";
  }
};













