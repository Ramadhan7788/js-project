# Age Calculator

An interactive **Age Calculator** built with **HTML, CSS, and JavaScript**.

The application allows users to enter their birthdate and calculates their current age in **years, months, and days**. It uses **Luxon** for date calculations and a custom calendar button to trigger the browser's date picker.

This project is part of my **Frontend Development learning journey** and focuses on working with JavaScript dates, external packages, form handling, and user input validation.

## Features

* Enter a birthdate using a date input.
* Custom calendar button to open the date picker.
* Calculate age in years, months, and days.
* Validate invalid birthdates.
* Prevent future birthdates.
* Display the result on the same page.
* Display validation errors clearly.
* Responsive and modern UI.
* Uses Luxon for date calculations.
* Uses JavaScript ES Modules.

## Technologies

* **HTML5** — Structure and form elements.
* **CSS3** — Styling, responsive layout, animations, and CSS variables.
* **JavaScript (ES6+)** — DOM manipulation, event handling, classes, and validation.
* **Luxon** — Date and time calculations.

## Project Structure

```text
age-calculator/
├── index.html
├── style.css
├── script.js
├── Logo-new.svg
└── README.md
```

## Dependencies

This project uses **Luxon** through a CDN:

```javascript
import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@3.4.4/+esm';
```

Luxon provides reliable utilities for parsing dates and calculating differences between dates.

## How It Works

### HTML

The application contains a form with a date input and a custom calendar button:

```html
<div class="input-group">
    <input
        class="date-input"
        type="date"
        id="date"
        placeholder="dd / mm / yyyy"
    >

    <button class="cal-btn" id="cal-btn">
        <!-- Calendar icon -->
    </button>
</div>

<button class="submit" type="submit">
    Calculate age
</button>
```

The calculated result is displayed inside the result container:

```html
<div class="result" id="result"></div>
```

### JavaScript

The `AgeCalculator` class is responsible for handling the form and calculating the user's age.

The birthdate is converted into a Luxon `DateTime` object:

```javascript
const birthDate = DateTime.fromISO(dateString);
const today = DateTime.now();
```

The application then calculates the difference between the birthdate and the current date:

```javascript
const diff = today
    .diff(birthDate, ['years', 'months', 'days'])
    .toObject();
```

The result is converted into whole years, months, and days:

```javascript
return {
    years: Math.floor(diff.years),
    months: Math.floor(diff.months),
    days: Math.floor(diff.days)
};
```

## Validation

The application performs basic validation before displaying the result.

### Invalid Date

If Luxon determines that the input is invalid, an error is displayed:

```javascript
if (!birthDate.isValid) {
    throw new Error("Invalid date format!");
}
```

### Future Birthdate

The application also prevents users from entering a date in the future:

```javascript
if (birthDate > today) {
    throw new Error("Are you sure you haven't been born yet?");
}
```

Errors are displayed using a separate `.error` class:

```javascript
renderError(message) {
    this.resultContainer.className = 'result error';
    this.resultContainer.textContent = message;
}
```

## Custom Date Picker Button

Instead of relying on the visible default calendar indicator, the project hides the browser's calendar icon and provides a custom button.

The button uses `showPicker()` when the browser supports it:

```javascript
if ('showPicker' in HTMLInputElement.prototype) {
    dateInput.showPicker();
} else {
    dateInput.focus();
}
```

This provides a more consistent visual design while still using the native date picker functionality.

## Learning Objectives

This project helps practice:

* Working with JavaScript dates.
* Using an external JavaScript package.
* Importing ES modules from a CDN.
* Using Luxon `DateTime`.
* Calculating differences between dates.
* Handling form submission.
* Preventing default form behavior.
* Creating reusable JavaScript classes.
* Validating user input.
* Handling errors with `try...catch`.
* Dynamically updating the DOM.
* Using browser APIs such as `showPicker()`.
* Creating responsive UI with CSS.

## Implementation Flow

```text
User selects birthdate
        ↓
Submit form
        ↓
Read input value
        ↓
Create Luxon DateTime
        ↓
Validate date
        ↓
Check if date is in the future
        ↓
Calculate difference from today
        ↓
Extract years, months, and days
        ↓
Display result
```

If validation fails:

```text
Invalid input
     ↓
Throw Error
     ↓
catch(error)
     ↓
Display error message
```

## Design

The interface uses a dark color scheme with:

* **Playfair Display** for major headings.
* **Space Grotesk** for interface elements.
* **Inter** for body text.
* **JetBrains Mono** for calculated results and code-like information.

CSS custom properties are used to maintain consistent colors, typography, spacing, and border-radius values throughout the application.

## Possible Improvements

Future improvements could include:

* Replace the native date picker with the required `js-datepicker` package.
* Add `aria-label` and accessibility attributes to the calendar button.
* Add a maximum/minimum selectable date.
* Display the user's birthdate alongside the calculated age.
* Add a more detailed breakdown such as total months or total days lived.
* Add unit tests for the age calculation logic.
* Improve error handling for empty input.
* Add a reset button.
* Add automated testing for leap years and edge cases.

## What I Learned

Through this project, I learned how to work with **external JavaScript libraries** and how libraries such as Luxon can simplify complex date calculations.

I also practiced structuring JavaScript using a **class-based approach**, handling form submissions, validating user input, and dynamically rendering both successful results and error messages.

## Status

**Completed** — Roadmap.sh Frontend Development practice project.

## License

This project is created for **learning and portfolio purposes**.
