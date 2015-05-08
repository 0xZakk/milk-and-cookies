$(document).ready(function(){
  trilloModel = new Trillo();
  trilloView = new TrilloView(trilloModel);
});


// first we have to instantiate a new Trillo, which we do here as trilloModel
// then we instantiate a new view
// we 'instantiate' because these are constructor functions
// this lets our app 'see' both a new Trillo object and a new TrillowView object

// everything is wrapped in $(document).ready() because of where our <script> is in the index.html page,
// if it were at the bottom of the page, we wouldn't need it here because we would be calling the scripts after the page had loaded





