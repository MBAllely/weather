exports.cels_converter = function(temp) {
  var c_temp = Math.ceil(temp - 273.15);
  return c_temp;
};

exports.far_converter = function(temp) {
  var f_temp = Math.ceil(temp * 9/5 - 459.67);
  return f_temp;
};
