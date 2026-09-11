# DevStack

A simple website where you can explore different technologies and build your own development stack. You can browse cards, add tools to your stack, and remove them anytime.

## Technologies Used

- React + TypeScript
- Vite
- Tailwind CSS + DaisyUI
- React Icons
- React Toastify
- JSON (for technology data)

## Features

1. Browse technology cards with category, difficulty, rating, and badges
2. Add technologies to **Your Stack** (no duplicates) and remove one or all
3. Fully responsive layout for mobile, tablet, and desktop

## How to Run

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

---

## React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. React uses it so we can describe the UI in a clear way, and then it converts that JSX into normal JavaScript for the browser.

### 2. What is the difference between props and state?

Props are data sent from a parent component to a child. State is data that belongs to a component and can change over time. Props are read-only for the child, but state can be updated with hooks like `useState`.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores values that can change and re-render the UI. In this project I used it for the mobile menu open/close state, the loading state, the technology list, and the selected stack items.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders. I used it to fetch `technologies.json` when the page loads, because fetching data is a side effect and should not run directly inside the component body on every render.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to track each list item. With unique keys, React can update only the changed items instead of re-rendering the whole list incorrectly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it in the Your Stack panel: if the stack is empty, it shows “Your stack is empty.” Otherwise it shows the selected items and the Remove All button.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to child: pass data through props.  
Child to parent: pass a function as a prop, then the child calls that function.  

Example: `ExploreSection` passes `tech`, `added`, and `onAdd` to `TechnologyCard`. When the button is clicked, the child calls `onAdd(tech)` to update the parent state.
