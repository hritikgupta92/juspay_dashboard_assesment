# Juspay Dashboard Assessment  
📊 A modern dashboard application built with **React + TypeScript + Vite** featuring a clean layout, interactive UI elements, and responsive design.

---

## ⚡ Features
- ⚛️ **React 18**, **TypeScript**, and **Vite** for fast builds and development.  
- 🎨 **Custom CSS** for styling (no Tailwind).  
- 📊 **Chart.js** for interactive and responsive charts.  
- 🌙 **Light/Dark Theme** powered by **Zustand** (state management).  
- 🖼️ **Material UI Icons (MUI)** for modern iconography.  
- 🧭 **Navigation** implemented using **React Router DOM**.  
- 📂 **Component-based architecture** ensuring scalability and maintainability.  

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
```sh
2️⃣ Install Dependencies
sh
Copy code
npm install
```
```sh
3️⃣ Run the Development Server
sh
Copy code
npm run dev
```

🛠️ Tech Stack
React 18

TypeScript

Vite

CSS (for styling)

Chart.js (for data visualization)

Zustand (for theme state management)

MUI Icons (for icons)

React Router DOM (for navigation)

```sh
📂 Project Structure
php
Copy code
saas-dashboard/
├── dist/                # Production build output
├── public/              # Static assets
├── src/
│   ├── assets/          # SVGs, images
│   ├── components/      # Reusable components
│   │   ├── Charts/
│   │   ├── Dashboard/
│   │   ├── Layout/
│   │   ├── Orders/
│   │   ├── Sidebar/
│   │   └── Topbar/
│   ├── data/            # Mock/dummy data
│   ├── pages/           # Page-level components
│   ├── store/           # Zustand store for global state
│   ├── styles/          # CSS files
│   ├── ErrorBoundary.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```
⚔️ Challenges Faced
TypeScript with Vite: Encountered issues with verbatimModuleSyntax requiring import type.

Theme Management: Used Zustand for global state handling instead of React Context to keep it lightweight.

Routing Setup: While setting up React Router DOM with Vite, had to ensure proper configuration for nested routes and refresh handling.

Deployment: Faced multiple issues while deploying with Vite but resolved using correct build configurations.

🌍 Live Demo : 
🔗 View the Dashboard : https://www.loom.com/share/071494b2a31840ccb79d0e5fbd5c5d25?sid=dd543054-869d-45c7-bdfd-06b7d8c59129


📹 Demo Video
🎥 Watch the Walkthrough :https://rg-saas-dashboard.netlify.app/dashboard
