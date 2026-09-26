# React Theme Switcher & Task Manager

A React and TypeScript application demonstrating state management with the React Context API and the `useReducer` hook.

This project was developed as part of a guided React learning activity focused on global theme management and reducer-based task management.

## Features

### Theme Management

- Light and dark theme support
- Global theme state using React Context API
- `ThemeProvider` for sharing theme state across components
- Custom `useTheme` hook
- Theme toggle button in the navigation bar
- Theme-aware application and task manager styling

### Task Management

- Add new tasks
- Remove existing tasks
- Task state managed with `useReducer`
- Typed task state and actions using TypeScript
- Empty tasks cannot be added
- Tasks are rendered dynamically

### Code Quality

- TypeScript for type safety
- Reusable React components
- CSS Modules for component-specific styling
- Separate constants, context, components, and reducer files
- Incremental Git commits with meaningful commit messages

---

## Technologies Used

- React
- TypeScript
- Vite
- React Context API
- `useState`
- `useContext`
- `useReducer`
- CSS Modules
- Git
- GitHub

---

## Project Structure

```text
react-state-management/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.css
│   │   ├── TaskManager.tsx
│   │   └── TaskManager.module.css
│   │
│   ├── constants/
│   │   └── theme.ts
│   │
│   ├── context/
│   │   └── ThemeContext.tsx
│   │
│   ├── reducers/
│   │   └── taskReducer.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Theme Management

The application uses the React Context API to manage the theme globally.

Two theme constants are defined:

- `light`
- `dark`

The `ThemeContext` provides:

- The current theme
- A `toggleTheme` function

The application uses a custom `useTheme` hook to access the theme context from components such as the `Navbar` and `TaskManager`.

### Theme Colors

#### Light Theme

- Background: `#FFFFFF`
- Text: `#000000`
- Button: `#1E90FF`

#### Dark Theme

- Background: `#242629`
- Text: `#FFFFFF`
- Button: `#85D1B0`

---

## Task Management

Task state is managed using the React `useReducer` hook.

Each task has the following structure:

```typescript
{
  id: number;
  text: string;
}
```

The reducer supports two actions.

### Add Task

```typescript
type: "add"
```

The task text is passed as the action payload and a new task is added to the state.

### Remove Task

```typescript
type: "remove"
```

The task ID is passed as the action payload and the matching task is removed from the state.

---

## Components

### Navbar

The `Navbar` component:

- Displays the application title
- Reads the current theme using `useTheme`
- Provides the theme toggle button
- Changes the button label depending on the current theme

### TaskManager

The `TaskManager` component:

- Manages task state using `useReducer`
- Uses local state for the task input
- Allows users to add tasks
- Displays the current tasks
- Allows users to remove tasks
- Uses the current theme for styling

---

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

Check your installed versions:

```bash
node --version
npm --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/keen-ivan/react-state-management.git
```

Navigate into the project:

```bash
cd react-state-management
```

Install dependencies:

```bash
npm install
```

---

## Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173/
```

Open the URL in your browser.

---

## Building for Production

To create a production build:

```bash
npm run build
```

This command checks the TypeScript project and creates a production build using Vite.

---

## Testing the Application

After starting the development server, verify the following.

### Theme

- Click the theme button.
- Confirm the application switches between light and dark themes.
- Confirm the button label changes appropriately.
- Confirm text remains readable in both themes.

### Tasks

- Enter a task.
- Click **Add Task**.
- Confirm the task appears in the task list.
- Add multiple tasks.
- Click **Remove** on a task.
- Confirm the selected task is removed.
- Try submitting an empty task and confirm it cannot be added.

---

## State Management

This project demonstrates different approaches to React state management.

### `useState`

`useState` is used for local state such as:

- The current theme inside the theme provider
- The task input value

### `useContext`

`useContext` allows components to access the shared theme without passing the theme through multiple levels of props.

### `useReducer`

`useReducer` manages the task collection and provides structured actions for modifying task state.

The overall task flow is:

```text
User Action
    |
    v
dispatch()
    |
    v
taskReducer()
    |
    v
Updated Task State
    |
    v
TaskManager re-renders
```

---

## Context Structure

The theme context follows this structure:

```text
ThemeProvider
    |
    +-- Navbar
    |     |
    |     +-- useTheme()
    |
    +-- TaskManager
          |
          +-- useTheme()
```

This allows both components to access the same theme state.

---

## Reducer Structure

The task reducer follows this structure:

```text
TaskManager
    |
    +-- useReducer()
          |
          +-- ADD task
          |
          +-- REMOVE task
```

The reducer receives the current state and an action and returns the updated state.

---

## Git Workflow

The project was developed using incremental commits rather than committing all features at once.

The development history includes commits for:

- Initial React TypeScript project setup
- Theme constants
- Theme context and navigation
- Theme styling
- Typed task reducer
- Task manager
- Task manager integration
- Theme contrast improvements
- Project documentation

The repository is publicly available on GitHub.

## Repository

**GitHub:**  
https://github.com/keen-ivan/react-state-management

---

## Learning Objectives

This project demonstrates practical understanding of:

- React component composition
- TypeScript interfaces and types
- React Context API
- `createContext`
- `useContext`
- Custom hooks
- `useState`
- `useReducer`
- Reducer actions
- Global state management
- CSS Modules
- Theme-based styling
- Git and GitHub workflow

---

## Author

**Mucyo Ivan**

Software Engineering Student

GitHub:  
https://github.com/keen-ivan