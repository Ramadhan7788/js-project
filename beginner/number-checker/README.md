# Number Checker

A beginner JavaScript project from the **roadmap.sh Frontend Developer Roadmap**.

This project creates a small report describing the characteristics of a given number. It uses simple boolean helper functions and combines their results into a single object.

## Features

* Check whether a number is positive.
* Check whether a number is negative.
* Check whether a number is zero.
* Check whether a number is even.
* Check whether a number is odd.
* Generate a complete number description as an object.

## Technologies Used

* JavaScript (ES6+)

## Learning Objectives

Through this project, I practiced:

* Creating reusable functions
* Returning boolean values
* Using comparison operators
* Using the modulo (`%`) operator
* Using strict equality (`===`)
* Using logical NOT (`!`)
* Creating and returning objects
* Combining multiple helper functions
* Testing different input conditions

## Project Structure

```text
number-checker/
│
├── index.html
├── script.js
└── README.md
```

## Functions

### `isPositive(number)`

Returns `true` when the number is greater than `0`.

```javascript
isPositive(5);
// true

isPositive(-2);
// false
```

---

### `isNegative(number)`

Returns `true` when the number is less than `0`.

```javascript
isNegative(-2);
// true

isNegative(5);
// false
```

---

### `isZero(number)`

Returns `true` when the number is exactly `0`.

```javascript
isZero(0);
// true

isZero(5);
// false
```

---

### `isEven(number)`

Returns `true` when the number is even.

```javascript
isEven(8);
// true

isEven(7);
// false
```

The modulo operator (`%`) is used to determine whether a number is evenly divisible by `2`.

---

### `describeNumber(number)`

Combines all helper functions and returns an object containing the number's characteristics.

```javascript
describeNumber(8);
```

Output:

```javascript
{
    positive: true,
    negative: false,
    zero: false,
    even: true,
    odd: false
}
```

## Example Results

### Positive Even Number

```javascript
describeNumber(8);
```

```text
{
    positive: true,
    negative: false,
    zero: false,
    even: true,
    odd: false
}
```

### Negative Odd Number

```javascript
describeNumber(-3);
```

```text
{
    positive: false,
    negative: true,
    zero: false,
    even: false,
    odd: true
}
```

### Zero

```javascript
describeNumber(0);
```

```text
{
    positive: false,
    negative: false,
    zero: true,
    even: true,
    odd: false
}
```

### Positive Odd Number

```javascript
describeNumber(7);
```

```text
{
    positive: true,
    negative: false,
    zero: false,
    even: false,
    odd: true
}
```

> Note: `0` is considered an even number because it is divisible by `2` with no remainder.

## What I Learned

This project reinforced the idea of breaking a problem into small, reusable functions.

Each helper function has a single responsibility:

* `isPositive()` checks whether a number is positive.
* `isNegative()` checks whether a number is negative.
* `isZero()` checks whether a number is zero.
* `isEven()` checks whether a number is even.
* `describeNumber()` combines the results of the helper functions.

The project also demonstrates how boolean expressions can be directly used as object property values.

## Roadmap.sh Project

https://roadmap.sh/projects/js-number-checker

## License

This project was built for learning purposes as part of the **roadmap.sh Frontend Developer Roadmap**.
