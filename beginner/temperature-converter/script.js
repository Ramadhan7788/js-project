function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32; 
}

function fahrenheitToCelcius(fahrenheit) {
    return ((fahrenheit -32) * 5) / 9;
}

const fahrenheit = celsiusToFahrenheit(36);
console.log(fahrenheit);

const celsius = fahrenheitToCelcius(100);
console.log(celsius);