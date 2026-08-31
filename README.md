# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# JS Gym 🏋️‍♂️

**Interactive JavaScript Practice Platform for Beginners**

JS Gym is an interactive learning platform designed to help beginners practice JavaScript through short, practical coding challenges.

The project combines **hands-on coding, theory, hints and progress tracking** in one simple learning environment.

## Current Version — v2.1

JS Gym v2.1 is a complete React-based rebuild of the original Vanilla JavaScript version.

### Built with

* React
* Vite
* JavaScript (ES6+)
* CSS
* React Hooks
* LocalStorage

### Learning content

**44 JavaScript challenges** across six categories:

* **Основи JavaScript** — 10 challenges
* **Масиви** — 10 challenges
* **Функції** — 10 challenges
* **Об'єкти** — 7 challenges
* **ES6+** — 5 challenges
* **Async JavaScript** — 2 challenges

The platform also includes a dedicated **Theory** section covering the same learning topics.

### Features

* Interactive code editor
* Code execution and automated tests
* Progressive hints
* Solutions
* JavaScript theory
* Challenge progress tracking
* Guest progress saved in LocalStorage
* Registration / Login / Profile
* Responsive mobile navigation
* Dark / Light theme
* YouTube learning section
* Keyboard-friendly navigation

Authentication is currently a **frontend-only learning implementation using LocalStorage** and is not intended for production use.

## Project Structure

```text
src/
├── components/       # UI components
├── data/              # Challenges and theory
├── utils/             # Utility functions
├── App.jsx
├── App.css
└── main.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the local development server in your browser.

## Roadmap

### Completed

* [x] Vanilla JavaScript version
* [x] 30 initial challenges
* [x] React rebuild
* [x] 44 JavaScript challenges
* [x] Theory section
* [x] Progress tracking
* [x] Registration / Login / Profile
* [x] Responsive mobile navigation
* [x] Dark / Light theme
* [x] YouTube learning section

### Next

* [ ] English localization
* [ ] Node.js backend
* [ ] Express API
* [ ] MongoDB
* [ ] Server-side authentication
* [ ] Cloud-based user progress

## Future

The long-term goal is to evolve JS Gym from a local React learning tool into a full-stack JavaScript learning platform:

**React → Node.js → Express → MongoDB**

with real user accounts, persistent progress and an expanded learning library.

---

> JS Gym is a learning project created while studying JavaScript, React and full-stack web development.
