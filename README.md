# User-Management-Application

# User Management App (React + Vite)

A fully-functional CRUD app using the JSONPlaceholder Users API.

## Features

- Fetch users and list them in a responsive table
  
- Create, Update, Delete users (simulated via JSONPlaceholder)
  
- Detail view per user
  
- React Router v6 routes
  
- Centralized state + API calls via a custom `useUsers` hook
  
- Loading spinner and error messages

- Clean, responsive styling (no CSS framework required)

- Well-commented, beginner-friendly code

## Tech
- React 18, Vite, React Router, Axios

## Getting Started
```bash
npm install
npm run dev
App runs at http://localhost:5173
Build for Production
npm run build
npm run preview
Deployment
•	Vercel: Import repo, select framework “Vite”, build command npm run build, output dist.
•	Netlify: Build command npm run build, publish directory dist.
•	GitHub Pages: Use a GH Action for Vite or serve the /dist output with any static host.
Notes
•	JSONPlaceholder simulates write actions. We optimistically update the local state to reflect changes immediately.
•	If an API call fails, an inline error message is shown.
