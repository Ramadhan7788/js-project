# Cart Total Calculator

A beginner JavaScript project from the **roadmap.sh Frontend Developer Roadmap**.

This project calculates a shopping cart summary based on the price and quantity of each item. The calculation includes the subtotal, discount, tax, and final total.

The project focuses on breaking the calculation into small, reusable functions and combining them to produce a complete cart summary.

## Features

* Calculate the subtotal of all cart items.
* Calculate the discount amount.
* Calculate tax after the discount has been applied.
* Calculate the final cart total.
* Return the complete calculation as an object.
* Support multiple items with different prices and quantities.

## Technologies Used

* JavaScript (ES6+)

## Learning Objectives

Through this project, I practiced:

* Creating reusable functions
* Working with arrays
* Working with objects
* Using `for...of` loops
* Performing arithmetic calculations
* Using object properties
* Passing arrays and objects into functions
* Combining multiple helper functions
* Returning structured objects
* Separating individual calculation responsibilities

## Project Structure

```text
cart-total-calculator/
│
├── index.html
├── script.js
└── README.md
```

## Calculation Flow

The cart calculation follows this order:

```text
Cart Items
    ↓
Calculate Subtotal
    ↓
Calculate Discount
    ↓
Amount After Discount
    ↓
Calculate Tax
    ↓
Calculate Final Total
```

The tax is calculated **after the discount has been applied**.

### Example

Given the following cart:

```javascript
const cartItems = [
    {
        name: "Notebook",
        price: 10,
        quantity: 2
    },
    {
        name: "Pen",
        price: 2,
        quantity: 5
    },
    {
        name: "Bag",
        price: 20,
        quantity: 1
    }
];
```

The subtotal is:

```text
Notebook = 10 × 2 = 20
Pen      = 2 × 5  = 10
Bag      = 20 × 1 = 20

Subtotal = 50
```

If the discount is `10%`:

```text
Discount = 50 × 10% = 5

Amount after discount = 50 - 5 = 45
```

If the tax is `10%`:

```text
Tax = 45 × 10% = 4.5
```

Final total:

```text
Total = 45 + 4.5 = 49.5
```

## Functions

### `calculateSubtotal(items)`

Calculates the subtotal by adding `price × quantity` for every item.

```javascript
calculateSubtotal([
    { price: 10, quantity: 2 },
    { price: 2, quantity: 5 }
]);
// 30
```

The calculation is:

```text
(10 × 2) + (2 × 5) = 30
```

---

### `calculateDiscount(subtotal, discountPercent)`

Calculates the discount amount based on the subtotal.

```javascript
calculateDiscount(100, 20);
// 20
```

The calculation is:

```text
100 × 20% = 20
```

---

### `calculateTax(amountAfterDiscount, taxPercent)`

Calculates the tax based on the amount after the discount.

```javascript
calculateTax(80, 10);
// 8
```

The calculation is:

```text
80 × 10% = 8
```

---

### `createCartSummary(items, discountPercent, taxPercent)`

Combines all calculation functions and returns the complete cart summary.

```javascript
createCartSummary(cartItems, 10, 10);
```

Example result:

```javascript
{
    subtotal: 50,
    discount: 5,
    tax: 4.5,
    total: 49.5
}
```

## Example Implementation

```javascript
function calculateSubtotal(items) {
    let subtotal = 0;

    for (const item of items) {
        subtotal += item.price * item.quantity;
    }

    return subtotal;
}

function calculateDiscount(subtotal, discountPercent) {
    return (subtotal * discountPercent) / 100;
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return (amountAfterDiscount * taxPercent) / 100;
}

function createCartSummary(items, discountPercent, taxPercent) {
    const subtotal = calculateSubtotal(items);

    const discount = calculateDiscount(
        subtotal,
        discountPercent
    );

    const amountAfterDiscount = subtotal - discount;

    const tax = calculateTax(
        amountAfterDiscount,
        taxPercent
    );

    const total = amountAfterDiscount + tax;

    return {
        subtotal,
        discount,
        tax,
        total
    };
}
```

## Example Usage

```javascript
const cartItems = [
    {
        name: "Notebook",
        price: 10,
        quantity: 2
    },
    {
        name: "Pen",
        price: 2,
        quantity: 5
    },
    {
        name: "Bag",
        price: 20,
        quantity: 1
    }
];

const summary = createCartSummary(
    cartItems,
    10,
    10
);

console.log(summary);
```

Output:

```text
{
    subtotal: 50,
    discount: 5,
    tax: 4.5,
    total: 49.5
}
```

## What I Learned

This project reinforced the importance of breaking a calculation into smaller functions.

Each function has a single responsibility:

* `calculateSubtotal()` handles the total price of cart items.
* `calculateDiscount()` handles the discount calculation.
* `calculateTax()` handles the tax calculation.
* `createCartSummary()` coordinates the entire calculation process.

The project also introduced a common pattern in real applications: **processing an array of objects and transforming the result into a structured summary object**.

The calculation order is important because the tax is calculated from the price **after the discount**, rather than from the original subtotal.

## Roadmap.sh Project

https://roadmap.sh/projects/js-cart-total-calculator

## License

This project was built for learning purposes as part of the **roadmap.sh Frontend Developer Roadmap**.
