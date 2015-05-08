var Trillo = function(){
  this.cards = [];
  this.fetchCards();
};

// Here we defining a constructor function called Trillo
// this constructor function has two properties:
// 1) an empty array called cards
// 2)  method called fetchCards, which we define below in the prototype

Trillo.prototype = {
  fetchCards: function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:3000/cards"
    }).done(function(response) {
      trilloModel.loadCards(response);
      trilloView.render();
    }).fail(function(response){
      console.log("js failed to load");
    });
  },
// Here we're defining a method called fetchCards on the prototype
// We want to define this on the prototype so that every instance of Trillo that we initiate will have access to it, without us having to define it every time we instantiate a new instance
// if we had defined this in the constructor function above, it would be create (i.e. redefined) every time we instantiated a new instance of Trillo, which uses up a lot more memory
// this way, we're only defining the function once
// this function only does one thing: it makes an ajax request to localhost:3000/cards to 'GET' all the cards
// first we create a new ajax request using $.ajax();
// then, within the ajax request, we define the type of request we're making, in this case type: 'GET', the datatype we want (dataType: 'json'), and the url we're sending the request to (url: "http://localhost:3000/cards")
// after our ajax request is defined, we define two promise callbacks, .done() and .fail()
// .done() is what will happen after the ajax request is completed. In this case. we're calling the trilloModel's loadCards() function on the response (the deferred object)), then calling the trilloView's render() function.
// both of these functions are defined elsewhere in our application. we have access to them because trilloModel and trilloView are both global variables (defined without the variable keyword 'var').
// .fail() is what will happen should the ajax request fail for some reason. In this case, if it fails we'll log to the console, "js failed to load"
   loadCards: function(response) {
    this.cards = [];
    for(var i = 0; i < response.length; i++){
      var card = new Card(response[i].id, response[i].description, response[i].completed);
      this.cards.push(card);
    }
  }
// Here we're defining a method to load the cards into our cards array (defined above)
// we do this by taking in our response, which we call above in the .done() promise, and for i in response, save the id, description and completedness into a new card we create with each iteration
// our card object is defined in the card.js file.
// once the card is created, we push it into our cards array
};

















