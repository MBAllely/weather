var object = require('./object.js').object;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(err, result){
  var output = object(result.goal);
  output.forEach(function(element){
    console.log(element);
  });
});
