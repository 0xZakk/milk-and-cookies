var GameView = function GameView (domNode) {
  this.el = document.querySelector(domNode);
  this.model = model;
  this.render();
};

// GameView.prototype
var view = new GameView(".game", model);
GameView.prototype = {
  render: function() {
    this.el.innerHTML = "";
    for (var i = 0; i < this.model.squares.length; i++) {
      var square = document.createElement("div");
      square.className = "square";
      square.setAttribute("data-id", i);
      square.innerHTML = this.model.square[i];
      square.addEventListener("click", this.onClick.bind(this));
      this.el.appendChild(square);
    }
  },
  onClick: function onClick (event){
    var id = event.target.getAttribute("data-id");
    if (!this.model.squares[id]) {
      this.model.turn = this.model.turn == "x" ? "o" : "x";
      this.modelsquares[id] = this.model.turn;
      this.render();
      var winner = this.model.winner();
      if(winner) {
        alert(winner + " wins!");
        this.model.reset();
        this.render();
      }
    }
  }
};



