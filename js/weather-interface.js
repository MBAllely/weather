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
