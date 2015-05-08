var Card = function(id, description, completed){
  this.id = id;
  this.description = description;
  this.completed = completed;
}

// we start by defining a new card objecting using a constructor function that takes an id, description and completed boolean.
// the function then saves these as properties of a card

Card.prototype = {
  save: function(){
    $.ajax({
      type: 'POST',
      data: { card: {description: this.description, completed: this.completed}},
      dataType: 'json',
      url: "http://localhost:3000/cards"
    }).done(function(response){
      console.log("model saved");
      trilloModel.fetchCards();
    }).fail(function(){
      console.log("failed to save");
    });
  },
// this is the method by which we save a new card once it's created
// on the UI, the user types in a card into the input field and clicks submit.
// this triggers the Card.save method described above.
// first, we define and ajax request with type: 'POST', dataType: 'json' and data of a card, created by the user and called on the trillo view. we send this request to our local host api
// here again we have two promise callbacks, .done() and .fail()
// in our .done() promise, we log to the console "model saved" and call the fetchCards function 
  update: function(data){
    $.ajax({
      type: 'PUT',
      data: {card: data},
      dataType: 'json',
      url: "http://localhost:3000/cards/" + this.id
    }).done(function(response){
      trilloModel.fetchCards();
      console.log("model updated");
    }).fail(function(){
      console.log("failed to updated");
    });
  }
};
