# Tabs

A simple and accessible **Tabs component** built with HTML, CSS, and JavaScript.

This project is based on the [Tabs](https://roadmap.sh/projects/simple-tabs) project from **roadmap.sh** and focuses on practicing basic DOM manipulation and event handling in JavaScript.

## 📌 Overview

The component contains four tabs, with the first tab active by default.

When a user clicks a tab:

* The currently active tab is deactivated.
* The previously visible content is hidden.
* The selected tab becomes active.
* The corresponding content panel is displayed.
* `aria-selected` and `hidden` attributes are updated to reflect the current state.

The project also uses semantic ARIA attributes to improve accessibility.

## ✨ Features

* Four interactive tabs
* First tab active by default
* Dynamic content switching
* Active tab styling
* DOM manipulation with JavaScript
* Click event handling
* Semantic HTML structure
* ARIA attributes for accessibility
* Responsive layout
* Custom CSS variables for colors, typography, spacing, and sizing

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **Google Fonts**

Fonts used:

* Playfair Display
* Space Grotesk
* Inter
* JetBrains Mono

## 📂 Project Structure

```text
tabs/
├── index.html
├── style.css
├── script.js
├── Logo-new.svg
└── README.md
```

## ⚙️ How It Works

The JavaScript first selects all tab buttons and tab panels:

```javascript
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');
```

An event listener is then attached to every tab button:

```javascript
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // tab switching logic
    });
});
```

When a tab is clicked, all tabs are reset:

```javascript
tabButtons.forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
});
```

At the same time, all panels are hidden:

```javascript
tabPanels.forEach(panel => {
    panel.classList.remove('active');
    panel.setAttribute('hidden', 'true');
});
```

The selected tab is then activated:

```javascript
button.classList.add('active');
button.setAttribute('aria-selected', 'true');
```

The corresponding panel is found using the button's `aria-controls` attribute:

```javascript
const targetPanelId = button.getAttribute('aria-controls');
const targetPanel = document.getElementById(targetPanelId);
```

Finally, the selected panel is displayed:

```javascript
targetPanel.classList.add('active');
targetPanel.removeAttribute('hidden');
```

### 🔗 Tab-to-Panel Relationship

Each tab button references its corresponding panel through `aria-controls`.

For example:

```html
<button
    role="tab"
    aria-selected="true"
    aria-controls="tab-1"
    id="btn-tab-1">
    Tab 1
</button>
```

The corresponding panel references the tab using `aria-labelledby`:

```html
<section
    id="tab-1"
    role="tabpanel"
    aria-labelledby="btn-tab-1">
    ...
</section>
```

This creates a clear relationship between the tab and its content panel.

## ♿ Accessibility

The project uses ARIA attributes to provide additional semantic information:

| Attribute         | Purpose                                     |
| ----------------- | ------------------------------------------- |
| `role="tablist"`  | Identifies the container as a group of tabs |
| `role="tab"`      | Identifies each button as a tab             |
| `role="tabpanel"` | Identifies the associated content area      |
| `aria-selected`   | Indicates which tab is currently selected   |
| `aria-controls`   | Identifies the panel controlled by a tab    |
| `aria-labelledby` | Associates a panel with its tab             |
| `hidden`          | Hides inactive panels from display          |

## 🎨 Styling

The interface uses CSS custom properties for consistent design values.

Example:

```css
:root {
    --color-bg: #0a0e1a;
    --color-surface: #131a2b;
    --color-surface-sec: #1a2338;
    --color-accent: #4a6fa5;
    --color-text: #ffffff;
    --color-border: #232d45;
}
```

Typography, spacing, colors, border radius, and responsive font sizes are centralized using CSS variables.

The layout also uses `clamp()` for responsive typography:

```css
--fs-h1: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
```

## 🧠 What I Learned

This project helped me practice:

* Selecting DOM elements with `querySelectorAll()`
* Using `forEach()` with DOM collections
* Adding event listeners with `addEventListener()`
* Handling click events
* Adding and removing CSS classes
* Reading HTML attributes with `getAttribute()`
* Updating attributes with `setAttribute()`
* Removing attributes with `removeAttribute()`
* Finding elements dynamically with `getElementById()`
* Using the `hidden` attribute
* Connecting HTML elements through ARIA attributes
* Separating HTML structure, CSS styling, and JavaScript behavior

## 🚀 How to Run

No build tools or dependencies are required.

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project:

```bash
cd tabs
```

3. Open `index.html` in your browser.

Alternatively, use **Live Server** in VS Code for easier development.

## 📚 Project Source

This project is part of my frontend development practice based on the **roadmap.sh** learning path.

* [roadmap.sh — Tabs](https://roadmap.sh/projects/simple-tabs)

## 📈 Learning Progress

This project is part of my transition from HTML/CSS into **JavaScript**, with a focus on understanding how JavaScript interacts with HTML elements through the DOM.

The main goal is to understand the fundamentals before moving into larger JavaScript applications and frameworks.

---

**Built as part of my frontend development learning journey.**
