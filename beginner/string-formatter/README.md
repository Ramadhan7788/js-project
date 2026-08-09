# String Formatter

A beginner JavaScript project from the **roadmap.sh Frontend Developer Roadmap**.

This project focuses on cleaning and formatting user names before displaying them. It demonstrates how to combine simple string manipulation functions to normalize inconsistent spacing and capitalization.

## Features

* Remove unnecessary spaces from the beginning and end of a string.
* Capitalize the first character of a name.
* Convert the remaining characters to lowercase.
* Format first and last names into a consistent display name.

## Technologies Used

* JavaScript (ES6+)

## Learning Objectives

Through this project, I practiced:

* Creating reusable functions
* Working with strings
* Using string methods such as `trim()`, `toUpperCase()`, and `toLowerCase()`
* Accessing characters using string indexing
* Combining multiple functions
* Using template literals
* Separating responsibilities between functions

## Project Structure

```text
string-formatter/
│
├── index.html
├── script.js
└── README.md
```

## Functions

### `cleanText(text)`

Removes whitespace from the beginning and end of a string.

```javascript
cleanText("   john   ");
// "john"
```

---

### `capitalize(text)`

Capitalizes the first character and converts the remaining characters to lowercase.

```javascript
capitalize("jOHN");
// "John"
```

---

### `formatDisplayName(firstName, lastName)`

Cleans and capitalizes both names before combining them into a full display name.

```javascript
formatDisplayName("   jOHN   ", "   dOE");
// "John Doe"
```

## Example

Input:

```javascript
formatDisplayName("   aVA   ", "   sTONE   ");
```

Output:

```text
Ava Stone
```

Another example:

```javascript
formatDisplayName("  nOAH", "kIM  ");
```

Output:

```text
Noah Kim
```

## How It Works

The formatting process is divided into three steps:

```text
Input
  ↓
cleanText()
  ↓
capitalize()
  ↓
formatDisplayName()
  ↓
Formatted Full Name
```

Each function has a single responsibility:

* `cleanText()` handles whitespace.
* `capitalize()` handles capitalization.
* `formatDisplayName()` combines the formatted names.

This makes the code easier to understand, reuse, and maintain.

## What I Learned

This project helped reinforce the importance of breaking a task into smaller reusable functions.

I also practiced common JavaScript string methods and learned how multiple functions can be combined to transform user input into a consistent format.

## Roadmap.sh Project

https://roadmap.sh/projects/js-string-formatter

## License

This project was built for learning purposes as part of the **roadmap.sh Frontend Developer Roadmap**.
