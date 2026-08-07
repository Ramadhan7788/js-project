# Temperature Converter

A beginner JavaScript project from the **roadmap.sh Frontend Developer Roadmap**.

This project demonstrates how to convert temperatures between Celsius and Fahrenheit while keeping the conversion logic separate from the display formatting. It emphasizes writing small, reusable functions that each perform a single responsibility.

## Features

* Convert Celsius to Fahrenheit.
* Convert Fahrenheit to Celsius.
* Format temperature values for display.
* Practice function composition and clean code principles.

## Technologies Used

* JavaScript (ES6+)

## Learning Objectives

Through this project, I practiced:

* Creating reusable functions
* Passing arguments and returning values
* Performing mathematical calculations
* Using template literals
* Separating business logic from presentation
* Writing clean and maintainable code

## Project Structure

```text
temperature-converter/
│
├── index.html
├── script.js
└── README.md
```

## Functions

### `celsiusToFahrenheit(celsius)`

Converts a temperature from Celsius to Fahrenheit.

Example:

```javascript
celsiusToFahrenheit(36);
// 96.8
```

---

### `fahrenheitToCelsius(fahrenheit)`

Converts a temperature from Fahrenheit to Celsius.

Example:

```javascript
fahrenheitToCelsius(100);
// 37.77777777777778
```

---

### `formatTemperature(value, unit)`

Formats a temperature value into a readable string.

Example:

```javascript
formatTemperature(50, "F");
// "50 F"

formatTemperature(20, "C");
// "20 C"
```

## Example Output

```text
96.8
37.77777777777778
45 C
50 F
```

## Roadmap.sh Project

https://roadmap.sh/projects/js-temperature-converter

## What I Learned

This project reinforced the importance of separating concerns by assigning a single responsibility to each function.

* `celsiusToFahrenheit()` handles only Celsius-to-Fahrenheit conversion.
* `fahrenheitToCelsius()` handles only Fahrenheit-to-Celsius conversion.
* `formatTemperature()` is responsible only for formatting the output.

By keeping calculations and presentation separate, the code becomes easier to understand, reuse, test, and maintain.

## License

This project was built for learning purposes as part of the **roadmap.sh Frontend Developer Roadmap**.
