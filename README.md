# ⭐ Store Rating Platform

A fullstack web application where users can rate stores, view ratings, and manage users and stores based on their roles.

---

## 🔗 Live Demo

🌐 **Frontend (React hosted on Vercel)**  
👉 [https://store-rating-platform.vercel.app](https://store-rating-platform.vercel.app)

---

## ⚙️ Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| Frontend     | React.js, Axios, React Router        |
| Backend      | Node.js, Express.js, Sequelize ORM   |
| Database     | MySQL                                |
| Auth         | JWT (token-based authentication)     |
| Deployment   | Vercel (Frontend), Render (Backend)  |

---

## 👥 User Roles & Features

### 👤 **System Administrator**
- Create admin, store owner, and normal users
- Add stores and assign owners
- View total users, stores, and ratings
- Filter users and stores by name, email, role

### 👤 **Normal User**
- Register and login
- View store list and submit/edit ratings (1 to 5)
- Search stores by name and address

### 👤 **Store Owner**
- View ratings submitted for their stores
- Check average rating per store

---

## 🔐 Authentication

- Login/Signup returns a JWT token
- Token stored in localStorage
- Protected routes on frontend + middleware-auth checks on backend

---

## 🛠️ Local Setup Instructions

### 📁 1. Clone the Repository
```bash
git clone https://github.com/your-username/ratings-stores.git
cd ratings-stores
cd backend
npm install
cp .env.example .env
# Fill in your MySQL credentials in .env
npx nodemon index.js
cd frontend
npm install
npm start
🧪 Running Tests
✅ Backend
bash
Copy code
cd backend
npm test
✅ Frontend
bash
Copy code
cd frontend
npm test
☁️ Deployment Guide
🌐 Frontend (Vercel)
Push /frontend to GitHub

Go to vercel.com

Import repo → Set build command: npm run build, output: build

Add any env vars if needed (e.g. REACT_APP_API_URL)

🖥️ Backend (Render)
Push /backend to GitHub

Go to render.com

Create new Web Service:

Start command: node index.js

Add env vars (DB_HOST, DB_USER, DB_PASS, JWT_SECRET, etc.)

🖼️ Screenshots
🔐 Login Page

⭐ Rating a Store

📊 Admin Dashboard

📁 Project Structure
txt
Copy code
backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── index.js
frontend/
│── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.js
.env
.gitignore
README.md
📄 License
MIT License © 2025 — Built by [Your Name]

❤️ Credits
Special thanks to:

Express & React teams

Sequelize & MySQL community

JWT & Open Source libraries

