// var index = "Do you have a test?";
// var write_test = "Write a test.";
// var pass = "Does the test Pass?";
// var refactor = "Do you need to refactor?";
// var do_refactor = "Refactor Code.";
// var write_code = "Write enouch code to pass the test.";
// var new_feature = "Select a new feature to implement.";

// Yes / No
// {prompt: pass, yes: , no: }
// {prompt: refactor, yes: , no: }

// Done
// {prompt: write_test
// {prompt: do_refactor
// {prompt: write_code
// {prompt: new_feature



module.exports = {
  index: function(req, res) {
    res.render('index'); // Do you have a test? Y / N
  },
  write_test: function(req, res) {
    res.render('write_test'); // Write a test - done
  },
  pass: function(req, res) {
    res.render('pass'); // Does the test pass? Y / N
  },
  refactor: function(req, res){
    res.render('refactor'); // Do you need to refactor? Y / N
  },
  do_refactor: function(req, res){
    res.render('do_refactor'); // Refactor Code - Done
  },
  write_code: function(req, res){
    res.render('write_code'); // Write enough code to pass the test - done
  },
  new_feature: function(req, res){
    res.render('new_feature'); // Select a new feature to implement - Done
  }
};