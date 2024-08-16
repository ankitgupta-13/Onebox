# Onebox

This project is a web application that implements a Onebox interface with user authentication, data fetching, and interactive features. Built with Vite, React, TypeScript, Tailwind, Redux, and Tanstack Query, this app supports both light and dark modes.

# Functions

- Login Page: User authentication with a custom login page.
- Onebox Screen: Fetch, display, and manage threads using APIs.
- Keyboard Shortcuts: Quick actions like deleting or replying to threads with keyboard shortcuts.
- Custom Text Editor: A rich text editor with custom buttons like "SAVE" and "Variables".
- Reply Functionality: Send replies to threads with HTML formatted emails.
- Light and Dark Mode: Toggle between light and dark themes.

## Getting Started

```js
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

# Usage

## Login Page

- Navigate to the login page, where users can authenticate using their credentials.
- After successful login, users will be redirected to the Onebox screen.

## Onebox Screen

- This screen displays a list of threads fetched from the /onebox/list API.
- You can view thread details, delete threads, or reply to them.

## Keyboard Shortcuts

- Press D to delete the currently selected thread.
- Press R to open the reply box for the selected thread.

## Light and Dark Mode

- Toggle between light and dark modes using the theme switcher available in the application.

# Technologies Used

- Vite: Fast build tool and development server.
- React: JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript.
- Tailwind CSS: Utility-first CSS framework.
- Redux: State management library.
- Tanstack Query: Data-fetching and caching library.
