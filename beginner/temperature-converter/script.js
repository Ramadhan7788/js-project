function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32; 
}

function fahrenheitToCelcius(fahrenheit) {
    return ((fahrenheit -32) * 5) / 9;
}

function formatTemperature(value, unit) {
    return `${value} ${unit}`;
}

const fahrenheit = celsiusToFahrenheit(36);
console.log(fahrenheit);

const celsius = fahrenheitToCelcius(100);
console.log(celsius);

const formatedCelcius = fahrenheitToCelcius(113);
console.log(formatTemperature(formatedCelcius, 'C'));

const formatedFahrenheit = celsiusToFahrenheit(10);
console.log(formatTemperature(formatedFahrenheit, 'F'));