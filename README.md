# ACToDo – React To-Do List App

A simple to-do list web app built with **React**, **React Router** and **Tailwind CSS**. Users can sign up, log in, and land on a personalized dashboard where they add and delete their daily activities.

This is a learning project to practice React fundamentals: components, props, state, routing and passing data between pages.

## Features

- Sign up with a username and password
- Log in with an existing account
- Error message when login fails
- Personalized welcome header on the landing page
- Add new activities (empty input is ignored)
- Delete activities from the list
- Message shown when there are no activities
- Client-side routing between Login, Signup and Landing pages
- Responsive layout styled with Tailwind CSS

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)

## Project Structure

```
src/
├── components/
│   ├── AddToDoform.jsx
│   ├── Card.jsx
│   ├── Header.jsx
│   ├── Todocontainer.jsx
│   ├── TodoItem.jsx
│   └── ToDolist.jsx
├── Pages/
│   ├── Landing.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── App.js
├── index.js
└── index.css
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# Go to the project folder
cd actodo

# Install dependencies
npm install

# Start the development server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Demo account

A default user is available for testing:

- **Username:** Karthik
- **Password:** Karthik

## How It Works

1. `App.js` keeps the list of users in state and passes it to the Login and Signup pages as props.
2. Signup adds a new user to that list.
3. Login checks the entered username and password against the list.
4. On success, the user is sent to `/Landing`, and their username is passed using React Router's `navigate` state.
5. The Landing page shows the username in the header and renders the to-do container.
6. `Todocontainer` holds the list of activities in state. `AddToDoform` adds items and `TodoItem` deletes them.

## Known Limitations

- Users and activities are stored only in React state, so they are lost when the page is refreshed.
- Passwords are stored as plain text. This is for practice only and must never be done in a real application.
- The Confirm Password field on the Signup page is not validated yet.
- The cards on the Landing page show fixed text (not live data).

## Future Improvements

- Validate Signup (empty fields, duplicate usernames, matching passwords)
- Save users and activities in `localStorage` or a backend database
- Hash passwords and add real authentication
- Protect the Landing page so only logged-in users can open it
- Edit activities and mark them as completed
- Show the real date and time in the cards

## Author

Suriya – [(https://github.com/suriyavr)]
