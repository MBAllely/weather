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
        $('.showWeather').append("<button class='btn-success' id='c_temperature'>Celsius!</button>" + " <button class='btn-success' id='f_temperature'>Fahrenheit!</button>");

        $("#c_temperature").click(function() {
          $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
            $('.c_temperature').text("The temperature in celsius is " + cels_converter(response.main.temp) + ".");
          }).fail(function(error) {
            $('.showWeather').text(error.responseJSON.message);
          });
        });

        $("#f_temperature").click(function() {
          $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
            $('.f_temperature').text("The temperature in fahrenheit is " + far_converter(response.main.temp) + ".");
          }).fail(function(error) {
            $('.showWeather').text(error.responseJSON.message);
          });
        });

      }).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
    });
  });



});
