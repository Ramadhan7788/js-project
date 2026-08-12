# Restricted Textarea

A simple contact form with a **character-limited textarea** built using HTML, CSS, and JavaScript.

This project is based on the [Restricted Textarea](https://roadmap.sh/projects/restricted-textarea) project from **roadmap.sh** and focuses on handling user input, manipulating DOM elements, and providing real-time feedback.

## 📌 Overview

The project contains a contact form with a restricted message textarea.

The textarea has a maximum character limit of **200 characters**. As the user types, the character counter updates dynamically.

When the character limit is reached:

* The textarea cannot accept additional characters.
* The textarea border changes to red.
* The character counter changes to red.
* The counter becomes bold to clearly indicate that the limit has been reached.

The character restriction itself is handled by the HTML `maxlength` attribute, while JavaScript is responsible for tracking the current character count and updating the UI.

## ✨ Features

* Contact form layout
* Full name input
* Email input
* Subject input
* Message textarea
* Maximum limit of 200 characters
* Real-time character counter
* Visual feedback when the limit is reached
* Red textarea border at the limit
* Red and bold character counter at the limit
* Native HTML form validation
* Dynamic DOM manipulation with JavaScript

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

## 📂 Project Structure

```text id="x0x9c3"
restricted-textarea/
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

The textarea defines its maximum length using the HTML `maxlength` attribute:

```html id="f4v8f1"
<textarea
    id="message"
    maxlength="200"
    placeholder="Tuliskan pesan Anda di sini (maks. 200 karakter)..."
    required>
</textarea>
```

This allows the browser to prevent the user from entering more than 200 characters.

The character counter starts at zero:

```html id="f7d1a0"
<div class="char-counter" id="counter-info">
    <span id="char-count">0</span> /
    <span id="max-count">200</span> Karakter
</div>
```

### 1. Selecting Elements

JavaScript first selects the textarea and elements used for the character counter:

```javascript id="2z6k8d"
const messageInput = document.getElementById('message');
const charCountDisplay = document.getElementById('char-count');
const counterInfo = document.getElementById('counter-info');
```

The maximum character limit is retrieved directly from the textarea:

```javascript id="w9x2j4"
const maxLength = messageInput.getAttribute('maxlength');
```

### 2. Listening for User Input

The `input` event fires every time the value of the textarea changes:

```javascript id="z9x4ac"
messageInput.addEventListener('input', () => {
    // character counting logic
});
```

The current number of characters is obtained using the string's `.length` property:

```javascript id="t7n4q2"
const currentLength = messageInput.value.length;
```

### 3. Updating the Counter

The current character count is then displayed in the UI:

```javascript id="m3c7p1"
charCountDisplay.textContent = currentLength;
```

For example:

```text
0 / 200 Karakter
25 / 200 Karakter
100 / 200 Karakter
200 / 200 Karakter
```

### 4. Detecting the Character Limit

JavaScript checks whether the current character count has reached the maximum:

```javascript id="h4s8n2"
if (currentLength >= maxLength) {
    messageInput.classList.add('limit-reached');
    counterInfo.classList.add('limit-reached');
} else {
    messageInput.classList.remove('limit-reached');
    counterInfo.classList.remove('limit-reached');
}
```

When the limit is reached, the `limit-reached` class is added to both the textarea and counter.

## 🎨 Limit Reached State

The textarea changes appearance when the limit is reached:

```css id="b8r5v3"
textarea.limit-reached {
    border-color: #e53e3e;
    box-shadow: 0 0 0 1px #e53e3e;
}
```

The character counter also changes:

```css id="n5w2q8"
.char-counter.limit-reached {
    color: #e53e3e;
    font-weight: bold;
}
```

This creates immediate visual feedback for the user.

## 🔒 Character Restriction

An important part of this project is understanding the difference between **restricting input** and **tracking input**.

The actual restriction is handled by HTML:

```html id="v3j7p9"
maxlength="200"
```

JavaScript does not manually delete additional characters.

Instead:

```text
HTML
 │
 └── maxlength="200"
          │
          ▼
 Prevent input beyond 200 characters

JavaScript
 │
 ├── Listen for input
 ├── Count characters
 ├── Update counter
 └── Change visual state
```

This keeps the JavaScript logic simple and lets the browser handle the input constraint.

## 🧠 What I Learned

This project helped me practice:

* `document.getElementById()`
* `addEventListener()`
* The `input` event
* Reading input values with `.value`
* Counting characters with `.length`
* Reading HTML attributes with `getAttribute()`
* Updating DOM content with `textContent`
* Adding CSS classes with `classList.add()`
* Removing CSS classes with `classList.remove()`
* Conditional statements with `if...else`
* HTML `maxlength`
* Native form validation
* Providing real-time user feedback

## 📈 Learning Focus

The main goal of this project is not to create a complex form, but to understand the relationship between **user input → JavaScript → DOM → visual feedback**.

The basic flow is:

```text
User types
    │
    ▼
input event
    │
    ▼
Read textarea value
    │
    ▼
Count characters
    │
    ▼
Update counter
    │
    ▼
Check maximum length
    │
    ├── Under limit ──► Normal state
    │
    └── Limit reached ► Red warning state
```

## 📚 Project Source

This project is part of my frontend development practice based on the **roadmap.sh** learning path.

* [roadmap.sh — Restricted Textarea](https://roadmap.sh/projects/restricted-textarea)

## 📝 Notes

The UI can still be improved in terms of visual design, spacing, responsive behavior, and interaction details.

However, the primary goal of this project is to practice **JavaScript fundamentals**, particularly handling user input and updating the DOM in real time.

Rather than spending too much time polishing the UI, the project focuses on completing the required functionality and continuing to the next JavaScript project.

---

**Built as part of my frontend development learning journey.**
