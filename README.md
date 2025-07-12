# 🌐 Portlify — Build Your Own Portfolio Without Coding

## 💡 Overview

**Portlify** is a full-stack web application that allows users to create, update, and share their own professional portfolios — without writing a single line of code. Users can register, fill out personal/professional details, and instantly get a **live shareable link** to their portfolio.

Now powered by a secure **Node.js + MongoDB backend** and **JWT authentication**, with **React Redux** for efficient state management on the frontend.

🔗 **Live App:** [https://portfolio-app-three-kohl.vercel.app/](https://portfolio-app-three-kohl.vercel.app/)

---

## 🔐 Authentication

- Secure JWT-based login & registration
- Authenticated routes with token validation
- Protected frontend routes using state from Redux

---

## 🚀 Features

- 📝 Register and log in securely
- ✍️ Add personal info, skills, and projects
- 🌐 Get a unique public link for your portfolio
- ♻️ Update your data any time after login
- 📱 Fully responsive and mobile-friendly
- 🗃️ Persistent user sessions using cookies + Redux
- 🧠 Global state management using **Redux Toolkit**

---

## 🛠 Tech Stack

### 🧑‍💻 Frontend
- **React.js**
- **Redux Toolkit** (global state management)
- **Tailwind CSS**
- React Router
- Axios

### 🖥️ Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT** for authentication
- **cookie-parser** and **CORS** for secure communication

---
## 📁 Folder Structure

```plaintext
 Frontend/
   ├── src/
   │   ├── assets/
   │   ├── Cloudinary/
   │   ├── Components/
   │   ├── pages/
   │   ├── redu/
   │   ├── App.jsx
   │   ├── index.css
   │   └── main.jsx
   ├── .env
   └── package.json (workspace manager)
 Backend/
  ├── cloudinary/
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  ├── connection.js
  ├── index.js
  ├── package.json
  └── .env

```
