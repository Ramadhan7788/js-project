# Price Calculator

An interactive JavaScript project from the **roadmap.sh Frontend Developer Roadmap**.

This project calculates the final price of a product after applying a discount and tax. The discount is applied first, then the tax is calculated based on the discounted price.

In addition to implementing the required calculation functions, this project was extended with a simple HTML form, input validation, error handling, and formatted price output.

## Features

* Calculate discount amount.
* Calculate tax based on the discounted price.
* Calculate the final price.
* Generate a price summary object.
* Interactive price calculator form.
* Validate user input.
* Display validation errors.
* Format numerical results using the Indonesian locale.
* Prevent negative prices.
* Restrict discount and tax percentages to `0–100%`.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* DOM API

## Learning Objectives

Through this project, I practiced:

* Creating reusable JavaScript functions
* Performing percentage calculations
* Combining multiple functions
* Working with JavaScript objects
* Handling form submission
* Preventing default form behavior
* Reading values from HTML inputs
* Converting strings to numbers with `parseFloat()`
* Validating user input
* Handling errors
* Updating HTML elements with JavaScript
* Using `toLocaleString()`
* Separating calculation logic from UI logic

## Project Structure

```text
price-calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Calculation Logic

The calculator follows this order:

```text
Original Price
      ↓
Calculate Discount
      ↓
Price After Discount
      ↓
Calculate Tax
      ↓
Final Price
```

The tax is **not** calculated from the original price. It is calculated from the price after the discount has been applied.

### Example

For a product with:

```text
Price:            100
Discount:          20%
Tax:               10%
```

The calculation is:

```text
Discount = 100 × 20% = 20

Price after discount = 100 - 20 = 80

Tax = 80 × 10% = 8

Final price = 80 + 8 = 88
```

Final price:

```text
88
```

## Functions

### `calculateDiscount(price, discountPercent)`

Calculates the discount amount.

```javascript
calculateDiscount(100, 20);
// 20
```

---

### `calculateTax(priceAfterDiscount, taxPercent)`

Calculates the tax based on the price after the discount.

```javascript
calculateTax(80, 10);
// 8
```

---

### `calculateFinalPrice(price, discountPercent, taxPercent)`

Calculates the final price after applying the discount and tax.

```javascript
calculateFinalPrice(100, 20, 10);
// 88
```

The function follows:

```text
price - discount + tax
```

---

### `createPriceSummary(price, discountPercent, taxPercent)`

Creates an object containing the original price, discount, tax, and final price.

```javascript
createPriceSummary(100, 20, 10);
```

Example result:

```javascript
{
    price: 100,
    discount: 20,
    tax: 8,
    finalPrice: 88
}
```

## Additional Improvements

The original exercise focuses mainly on JavaScript functions. I extended the project with a simple interactive interface.

### Form Validation

The form checks whether:

* All fields contain valid numbers.
* The price is not negative.
* The discount is between `0%` and `100%`.
* The tax is between `0%` and `100%`.

Example validation rules:

```javascript
if (price < 0) {
    showError("Harga tidak boleh bernilai negatif!");
}

if (discountPercent < 0 || discountPercent > 100) {
    showError("Persentase diskon harus berada di rentang 0 - 100%!");
}

if (taxPercent < 0 || taxPercent > 100) {
    showError("Persentase pajak harus berada di rentang 0 - 100%!");
}
```

### Error Handling

Invalid input is displayed through an error message instead of allowing the calculator to continue with invalid data.

```javascript
function showError(message) {
    errorBox.textContent = message;
    errorBox.style.display = "block";
}
```

### Form Handling

The form uses the `submit` event and prevents the browser's default form submission behavior.

```javascript
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // calculation logic
});
```

### Number Formatting

The results are formatted using the Indonesian locale:

```javascript
finalPrice.toLocaleString("id-ID");
```

This allows numbers to be displayed in a more familiar format for Indonesian users.

## Example Test Cases

| Price | Discount | Tax | Final Price |
| ----: | -------: | --: | ----------: |
|   100 |      20% | 10% |          88 |
|   200 |      25% |  5% |       157.5 |
|    50 |       0% | 10% |          55 |

Example:

```javascript
console.log(createPriceSummary(100, 20, 10));

console.log(createPriceSummary(200, 25, 5));

console.log(createPriceSummary(50, 0, 10));
```

## What I Learned

This project started as a simple JavaScript function exercise and was extended into a small interactive application.

The main concept I practiced was **separation of responsibilities**.

The calculation functions are responsible for the mathematical operations, while the DOM code handles user interaction, validation, and displaying the results.

This makes the calculation logic reusable independently from the UI.

I also learned that a small JavaScript exercise can be extended into a more realistic application by adding:

* User input
* Validation
* Error handling
* DOM manipulation
* Number formatting
* Basic UI styling

## Roadmap.sh Project

https://roadmap.sh/projects/js-price-calculator

## License

This project was built for learning purposes as part of the **roadmap.sh Frontend Developer Roadmap**.
