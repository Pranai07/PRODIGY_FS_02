# 🚀 Employee Management System

A full-stack Employee Management System built with **React.js**, **Express.js**, **Node.js**, **Prisma ORM**, **PostgreSQL**, and **JWT Authentication**. The application provides secure authentication and complete CRUD operations for managing employee records through a responsive and user-friendly interface.


## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Logout

### 👨‍💼 Employee Management
- View Employees
- Add Employee
- Edit Employee
- Delete Employee
- Search Employees

### 📊 Dashboard
- Total Employees
- Total Departments
- Average Salary
- Recent Employees

### 🎨 User Interface
- Responsive Bootstrap 5 Design
- Reusable React Components
- Loading Spinner
- Toast Notifications
- Delete Confirmation Modal

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap 5
- React Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT
- bcrypt

---

## 📂 Project Structure

```
Employee-Management-System
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── App.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── prisma
│   ├── routes
│   ├── utils
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Pranai07/employee-management-system.git
```

### Backend Setup

```bash
cd server

npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_jwt_secret

PORT=5000
```

Run Prisma migrations:

```bash
npx prisma migrate dev

npx prisma generate
```

Start backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```



## 🔑 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| POST | `/api/auth/logout` | Logout User |
| GET | `/api/users/me` | Get Logged-in User |

### Employee

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/employees` | Get All Employees |
| GET | `/api/employees/:id` | Get Employee |
| POST | `/api/employees` | Add Employee |
| PUT | `/api/employees/:id` | Update Employee |
| DELETE | `/api/employees/:id` | Delete Employee |

---

## 🔒 Authentication Flow

1. User registers an account.
2. User logs in with email and password.
3. Server validates credentials.
4. JWT token is generated.
5. Token is stored in Local Storage.
6. Axios automatically sends the token in request headers.
7. Protected routes verify the token before granting access.

---

## 🚀 Future Improvements

- Role-based access (Admin/Employee)
- Employee Profile Pictures
- Pagination
- Export Employee Data
- Email Notifications
- Attendance Management
- Leave Management

---

## 📄 License

This project is licensed under the MIT License.

---
## ☁ Deployment

### Frontend
- Vercel

### Backend
- Render

### Database
- Neon PostgreSQL

## 👨‍💻 Developed By

Pranai Sai
