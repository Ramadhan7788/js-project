# Accordion Component

An interactive **Accordion Component** built with **HTML, CSS, and JavaScript**.

The component displays a list of frequently asked questions. When a question is clicked, its corresponding answer expands while any previously opened section collapses. This ensures that only **one accordion item can be open at a time**, keeping the interface clean and organized.

This project is part of my **Frontend Development learning journey** and is based on a [Roadmap.sh](https://roadmap.sh/) project challenge.

## Features

* Expand and collapse FAQ sections.
* Only one section can be open at a time.
* Automatically closes the previously opened section.
* Smooth content expansion and collapse animation.
* Rotating indicator icon when an item is active.
* Responsive layout.
* Uses semantic `<button>` elements for accordion headers.
* Dynamic content height using JavaScript.

## Technologies

* **HTML5** — Structure and semantic markup.
* **CSS3** — Styling, layout, transitions, and responsive design.
* **JavaScript** — DOM manipulation and event handling.

## Project Structure

```text
accordion/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

### HTML

Each accordion section consists of three main parts:

```html
<div class="accordion-item">
    <button class="accordion-header">
        <span>Question</span>
        <span class="icon">v</span>
    </button>

    <div class="accordion-content">
        <p>Answer content.</p>
    </div>
</div>
```

The question is placed inside a `<button>` so that it can be interacted with naturally using mouse or keyboard input.

### CSS

The content section is initially hidden using:

```css
.accordion-content {
    max-height: 0;
    overflow: hidden;
}
```

When the accordion item receives the `active` class, padding is added and JavaScript dynamically sets the `max-height` based on the content's actual height.

The indicator icon also rotates when the section is active:

```css
.accordion-item.active .accordion-header .icon {
    transform: rotate(180deg);
}
```

### JavaScript

JavaScript listens for clicks on each accordion header.

When a header is clicked:

1. Check whether the current item is already active.
2. Remove the `active` class from every accordion item.
3. Reset the height of every content section.
4. If the clicked item was not previously active, activate it.
5. Calculate its content height using `scrollHeight`.
6. Set the `max-height` dynamically to reveal the content.

The important part of the implementation is:

```javascript
accordionItems.forEach((otherItem) => {
    otherItem.classList.remove("active");

    const otherContent =
        otherItem.querySelector(".accordion-content");

    otherContent.style.maxHeight = null;
});
```

This guarantees that previously opened sections are collapsed before opening the selected section.

## Learning Objectives

This project helps practice:

* DOM selection with `querySelector()` and `querySelectorAll()`.
* Adding event listeners with `addEventListener()`.
* Handling click events.
* Adding and removing CSS classes with `classList`.
* Reading element dimensions with `scrollHeight`.
* Dynamically modifying inline styles.
* Creating CSS transitions.
* Building interactive UI components with JavaScript.
* Understanding the relationship between HTML structure, CSS state, and JavaScript behavior.

## Implementation Notes

The accordion uses the `.active` class as the state that determines whether an item is currently expanded.

```text
Normal State
    ↓
User clicks header
    ↓
Check current state
    ↓
Close all accordion items
    ↓
Was clicked item already active?
    ├── Yes → Keep everything closed
    └── No  → Add .active + set max-height
```

The `scrollHeight` property is used instead of hardcoding a fixed height so that the accordion can accommodate different amounts of content.

```javascript
const dynamicHeight = content.scrollHeight * 1.5;
content.style.maxHeight = dynamicHeight + "px";
```

## Possible Improvements

Future improvements could include:

* Replacing the `1.5` height multiplier with a more precise value.
* Using `max-height: none` after the transition completes.
* Adding `aria-expanded` for improved accessibility.
* Connecting the button to its content using `aria-controls`.
* Supporting keyboard navigation explicitly.
* Adding an animated plus/minus icon.
* Improving responsive typography and spacing.

## What I Learned

Through this project, I practiced connecting **CSS state management with JavaScript DOM manipulation**.

The main concept was understanding how JavaScript can add or remove a class to change the visual state of an element, while also dynamically controlling properties such as `max-height` to create an animated interaction.

## Status

**Completed** — Roadmap.sh Frontend Development practice project.

## License

This project is created for **learning and portfolio purposes**.
