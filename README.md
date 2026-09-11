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

JSX is HTML-like syntax inside JavaScript. React uses it so building UI feels natural, then converts it to regular JS behind the scenes.

### 2. What is the difference between props and state?

Props come from a parent and stay read-only. State lives inside a component and can change — like with `useState`.

### 3. What does the `useState` hook do, and where did you use it in this project?

It keeps track of changing values and re-renders the UI when they update. I used it for the mobile menu, loading, the tech list, and the selected stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets you run extra work after the UI shows up. I needed it to load `technologies.json` when the page opens — that way the fetch happens once, not on every re-render.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

So React can tell items apart and update only what changed, instead of messing up the whole list.

### 6. What is conditional rendering? Show one place you used it.

It means showing different UI based on a condition. In Your Stack, if nothing’s selected it shows “Your stack is empty.” Otherwise it shows the items and Remove All.

### 7. How do you pass data from a parent to a child, and how does a child send something back?

Parent → child: through props.  
Child → parent: pass a function as a prop, then call it from the child.

Example: `ExploreSection` passes `tech`, `added`, and `onAdd` to `TechnologyCard`. On click, the card calls `onAdd(tech)` to update the parent.
