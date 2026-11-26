const convertToCelsius = function(fahrenheit) {

  let tempC = (fahrenheit - 32) * 5 / 9;
  let roundC = Math.round(tempC * 10) / 10;
  return roundC;
};
//  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;


const convertToFahrenheit = function(celsius) {

  let tempF = celsius * 9 / 5 + 32;
  let roundF = Math.round(tempF * 10) / 10;
  return roundF;
};
// return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;

console.log(convertToCelsius(100));

console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
