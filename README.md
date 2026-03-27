# 🎮 DREAM E-SPORTS: Tournament Management Platform

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

A comprehensive, full-stack E-sports tournament management platform designed for competitive gaming (inspired by Valorant). Built with the MERN stack featuring a sleek, dark-themed gaming UI and a robust, secure REST API.

## ✨ Features

### 🖥️ Frontend (React + Vite + Tailwind v4)
* **Aggressive Gaming UI:** Custom dark mode theme (`gaming-dark`, `gaming-black`, `gaming-red`) with neon glow effects.
* **Authentication UI:** Secure Login and Registration forms with JWT interception.
* **Player Dashboard:** Personalized profile cards with competitive stats (Wins, Losses, K/D).
* **Global Leaderboard:** Real-time ranking system highlighting the top 3 players.
* **Tournament & Team Hub:** View active brackets, create 5-man rosters, and track match schedules.
* **Responsive Design:** Fully optimized for both desktop and mobile viewing.

### ⚙️ Backend (Node.js + Express + MongoDB)
* **JWT Authentication:** Secure token-based auth with route protection.
* **Advanced Security:** Helmet, CORS, Rate Limiting, and NoSQL Injection protection.
* **Complex Data Models:** Mongoose schemas for Users, Teams, Tournaments, and Matches.
* **Pagination & Filtering:** Advanced API querying capabilities.
* **Swagger API Docs:** Interactive API documentation available at `/api-docs`.
* **Database Seeder:** Automated script to populate dummy players and admins.

## 🚀 Quick Start Guide

### 1. Prerequisites
* Node.js (v18+ recommended)
* MongoDB Atlas Cluster (or local MongoDB)

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_jwt_key_here
```

### 3. Installation
Install dependencies for both backend and frontend:
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

### 4. Seed the Database (Optional but recommended)
Populate the database with dummy e-sports players (including 'DreamAdmin'):
```bash
# From the root directory
npm run data:import
```

### 5. Run the Application
You will need two terminals to run the full-stack environment.

**Terminal 1 (Backend Server):**
```bash
# From the root directory
npm run dev
# Server starts on http://localhost:5000
```

**Terminal 2 (Frontend Client):**
```bash
# From the root/client directory
cd client
npm run dev
# React app starts on http://localhost:5173 (or 5174)
```

## 📁 Project Architecture
```text
esports-tournament-api/
├── client/                 # React Frontend (Vite)
│   ├── src/
│   │   ├── api/            # Axios instance & interceptors
│   │   ├── pages/          # Home, Login, Profile, Leaderboard, etc.
│   │   ├── App.jsx         # Main routing & Navbar
│   │   └── index.css       # Tailwind v4 theme configuration
├── controllers/            # Backend route logic
├── models/                 # MongoDB Schemas
├── routes/                 # Express API routes
├── middleware/             # Auth & Error handling
├── seeder.js               # DB population script
└── index.js                # Backend entry point
```

## 👨‍💻 Author
Built by **Dream** - E-sports Player & Full Stack Developer.