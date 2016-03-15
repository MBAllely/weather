(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "2d7a6dd16947d5f5ab1a8bc26248335b";

},{}],2:[function(require,module,exports){
exports.cels_converter = function(temp) {
  var c_temp = Math.ceil(temp - 273.15);
  return c_temp;
};

exports.far_converter = function(temp) {
  var f_temp = Math.ceil(temp * 9/5 - 459.67);
  return f_temp;
};

},{}],3:[function(require,module,exports){
// var object = require('./../js/object.js').object;
// 
// $(document).ready(function(){
//   $('#location').submit(function(event){
//     event.preventDefault();
//
//     });
//   });

var apiKey = require('./../.env').apiKey;
var cels_converter = require('./../js/temperature.js').cels_converter;
var far_converter = require('./../js/temperature.js').far_converter;
var city;



$(document).ready(function() {
  $('#weatherLocation').click(function() {
    city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
        $('.showWeather').append("<button class='btn-success' id='temperature'>Temp!</button> ");

        $("#temperature").click(function() {
          $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
            $('.temperature').text("\nThe temperature in celsius is " + cels_converter(response.main.temp) + "\nThe temperature in fahrenheit is " + far_converter(response.main.temp) + ".");
          }).fail(function(error) {
            $('.showWeather').text(error.responseJSON.message);
          });
        });

      }).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
    });
  });



});

},{"./../.env":1,"./../js/temperature.js":2}]},{},[3]);
