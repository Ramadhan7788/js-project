# Cookie Consent

A simple **Cookie Consent banner** built with HTML, CSS, and JavaScript.

This project is based on the [Cookie Consent](https://roadmap.sh/projects/cookie-consent) project from **roadmap.sh** and focuses on practicing basic DOM manipulation, event handling, and browser `localStorage`.

## 📌 Overview

Many websites display a cookie consent banner to inform users about the use of cookies and ask for their consent.

In this project, a cookie consent banner appears when the user visits the page for the first time.

The user can:

* Accept the cookie consent.
* Close the banner without saving consent.
* Have their consent persisted using `localStorage`.

Once the user accepts the consent, the banner will remain hidden on subsequent visits.

## ✨ Features

* Cookie consent banner
* Accept consent button
* Close button
* Persistent consent using `localStorage`
* Banner automatically hidden after consent
* Banner remains hidden on subsequent visits
* DOM manipulation with JavaScript
* Click event handling
* Responsive positioning
* Custom CSS variables
* Debug logging with `console.log()`

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **LocalStorage API**

## 📂 Project Structure

```text
cookie-consent/
├── index.html
├── style.css
├── script.js
├── svg/
│   └── cookie-svgrepo-com.svg
└── README.md
```

## ⚙️ How It Works

The JavaScript waits until the DOM has finished loading:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Cookie consent logic
});
```

The required elements are then selected:

```javascript
const cookieBanner = document.getElementById('cookie-ban');
const acceptBtn = document.getElementById('accept-btn');
const closeBtn = document.getElementById('close-btn');
```

### 1. Check Existing Consent

The project uses `localStorage` to check whether the user has already accepted the consent:

```javascript
const hasConsented = localStorage.getItem('cookieConsent');
```

If no consent is found, the banner is displayed:

```javascript
if (!hasConsented) {
    cookieBanner.classList.remove('hidden');
}
```

If consent already exists, the banner remains hidden.

### 2. Accept Cookies

When the user clicks **I like Cookies**, the application stores the consent:

```javascript
localStorage.setItem('cookieConsent', 'true');
```

The banner is then hidden:

```javascript
cookieBanner.classList.add('hidden');
```

Because the value is stored in `localStorage`, it persists even after the browser is refreshed or closed.

### 3. Close Without Consent

The close button hides the banner without saving anything:

```javascript
closeBtn.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
});
```

This means that if the user reloads the page, the banner can appear again because no consent was saved.

## 💾 LocalStorage

The project stores a simple value:

```text
key:   cookieConsent
value: true
```

You can inspect it through:

**Browser DevTools → Application → Local Storage**

To reset the consent during development, run:

```javascript
localStorage.removeItem('cookieConsent');
```

After removing the value, refresh the page and the cookie banner will appear again.

## 🐛 Debug Logging

Because this project is part of my JavaScript learning process, I intentionally added debug messages using `console.log()`.

For example:

```javascript
console.log('[DEBUG] DOM selesai dimuat.');
console.log('[DEBUG] Status cookieConsent di localStorage:', hasConsented);
console.log('[DEBUG] Tombol Accept diklik.');
```

These logs make it easier to understand the execution flow and verify what happens when different buttons are clicked.

The debug output can later be removed when the project is prepared for production.

## 🎨 UI Structure

The cookie banner uses an `<aside>` element:

```html
<aside class="cookie-ban hidden" id="cookie-ban">
    <button class="close-btn" id="close-btn">&times;</button>

    <div class="cookie-icon">
        <img src="svg/cookie-svgrepo-com.svg" alt="cookie icon">
    </div>

    <p class="cookie-message">
        We use cookies to improve your user experience.
    </p>

    <button class="accept-btn" id="accept-btn">
        I like Cookies
    </button>
</aside>
```

The `hidden` class is used to control whether the banner is visible.

```css
.cookie-ban.hidden {
    display: none;
}
```

JavaScript simply adds or removes this class depending on the current state.

## 🧠 What I Learned

This project helped me practice several important JavaScript fundamentals:

* `DOMContentLoaded`
* `document.getElementById()`
* `addEventListener()`
* Arrow functions
* Conditional statements
* Functions
* DOM class manipulation
* `classList.add()`
* `classList.remove()`
* `localStorage.getItem()`
* `localStorage.setItem()`
* `localStorage.removeItem()`
* Browser DevTools
* Debugging with `console.log()`

### 🔄 Application Flow

```text
Page Loaded
     │
     ▼
Check localStorage
     │
     ├── cookieConsent exists
     │        │
     │        ▼
     │   Keep banner hidden
     │
     └── No consent
              │
              ▼
        Show cookie banner
              │
        ┌─────┴─────┐
        ▼           ▼
     Accept        Close
        │           │
        ▼           ▼
Save consent     Hide banner
        │
        ▼
Hide banner
```

## 📚 Project Source

This project is part of my frontend development practice based on the **roadmap.sh** learning path.

* [roadmap.sh — Cookie Consent](https://roadmap.sh/projects/cookie-consent)

## 📈 Learning Progress

This project is part of my transition from HTML/CSS into **JavaScript**.

The focus at this stage is understanding how JavaScript interacts with the browser through:

* DOM manipulation
* Event handling
* Browser APIs
* State persistence
* Basic debugging

The project also introduces `localStorage`, which is an important step toward building more interactive web applications.

---

**Built as part of my frontend development learning journey.**
