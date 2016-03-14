var pingPong = require('./ping-pong.js').pingPong;

var goal = prompt("What number would you like to ping-pong to?");
var result = pingPong(goal);
result.forEach(function(element) {
  console.log(element);
});
