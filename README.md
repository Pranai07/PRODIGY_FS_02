# Employee Management System

A secure and responsive full-stack Employee Management System built using **React.js**, **Node.js**, **Express.js**, and **PostgreSQL (Neon)**. The application provides JWT-based authentication and complete employee management with CRUD operations. It is deployed using **Vercel** (Frontend) and **Render** (Backend).

---

## 🚀 Live Demo

### Frontend (Vercel)
https://employeemanagementsystem-weld.vercel.app/

### Backend (Render)
https://employee-management-system-qw19.onrender.com

---

## 📂 GitHub Repository

### Frontend
https://github.com/Pranai07/PRODIGY_FS_02/tree/main/client

### Backend
https://github.com/Pranai07/PRODIGY_FS_02/tree/main/server

---

## ✨ Features

- User Registration
- Secure User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Add Employee
- View Employee List
- Update Employee Details
- Delete Employee
- PostgreSQL Database Integration
- Responsive User Interface
- Secure REST APIs
- CORS Configuration
- Cookie-based Authentication
- Production Deployment

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs
- Cookie Parser
- Helmet
- CORS

### Database
- PostgreSQL
- Neon Database

### Deployment
- Vercel
- Render

---

## 📁 Project Structure

```
Employee-Management-System
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── middleware
│   │   ├── models
│   │   ├── config
│   │   └── app.js
│   │
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication

- JWT Token Authentication
- HTTP-only Cookies
- Password Hashing using bcrypt
- Protected API Routes
- CORS Enabled

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/Pranai07/PRODIGY_FS_02.git
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

---

## ⚙ Environment Variables

Create a `.env` file inside the **server** folder.

```
DATABASE_URL=your_neon_database_url

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=1d

PORT=5000
```

---

## 📡 API Endpoints

### Authentication

```
POST /api/auth/register

POST /api/auth/login
```

### User

```
GET /api/users/me
```

### Employees

```
GET /api/employees

POST /api/employees

PUT /api/employees/:id

DELETE /api/employees/:id
```

---


## 🚀 Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- Neon PostgreSQL

---

## 📈 Future Improvements

- Role-Based Access Control
- Employee Search
- Pagination
- Dashboard Analytics
- File Upload
- Profile Pictures
- Dark Mode
- Email Notifications
- Audit Logs
- Export Employee Data

---

## 👨‍💻 Author

**Pranai Sai**

GitHub:
https://github.com/Pranai07

Email:
pranaisai007@gmail.com
---

## ⭐ If you found this project useful

Please consider giving this repository a ⭐ on GitHub.
