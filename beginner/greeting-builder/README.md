# Greeting Builder

A beginner JavaScript project from the **roadmap.sh Frontend Developer Roadmap**.

This project focuses on writing small, reusable functions and combining them to produce a final result. The application builds a personalized greeting based on a person's name and the time of day.

## Features

* Format a person's full name.
* Generate greetings for different times of the day.
* Combine multiple functions to create a complete greeting.
* Practice function composition and clean code.

## Technologies Used

* JavaScript (ES6+)

## Learning Objectives

Through this project, I practiced:

* Creating and calling functions
* Passing arguments to functions
* Returning values
* Using conditional statements (`if` / `else`)
* String interpolation with template literals
* Writing reusable and modular code

## Project Structure

```text
greeting-builder/
│
├── index.html
├── Logo-new.svg
├── script.js
├── style.css
└── README.md
```

## Example Output

```text
Ava Stone

Good morning

Good morning, Ava Stone
Good evening, Noah Kim
Good afternoon, Mina Patel
```

## Roadmap.sh Project

https://roadmap.sh/projects/js-greeting-builder

## What I Learned

One of the key takeaways from this project is that larger problems can be broken down into smaller, reusable functions.

Instead of writing all the logic inside a single function, each function has a single responsibility:

* `formatName()` formats the full name.
* `getGreeting()` determines the appropriate greeting.
* `createGreeting()` combines both functions to produce the final output.

This approach makes the code easier to read, test, and maintain.

## License

This project was built for learning purposes as part of the **roadmap.sh Frontend Developer Roadmap**.
