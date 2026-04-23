# Fullstack Auth + Task Manager

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Role-Based Access (Admin/User)
- Task CRUD APIs
- Protected Routes
- React Frontend Integration

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt

### Frontend
- React.js (Vite)
- Axios
- React Router

---

## ⚙️ Setup Instructions

### Backend

cd backend
npm install
npm run dev

Create .env:

MONGO_URI=your_mongo_url
JWT_SECRET=your_secret

---

### Frontend

cd frontend
npm install
npm run dev

---

## 🔐 API Endpoints

### Auth

POST /api/v1/auth/register  
POST /api/v1/auth/login  

### Tasks

GET /api/v1/tasks  
POST /api/v1/tasks  
PUT /api/v1/tasks/:id  
DELETE /api/v1/tasks/:id  

---

## 🔒 Security

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes
- Role-based authorization

---

## 📈 Scalability Notes

- Can be converted to microservices architecture
- Redis can be used for caching
- Load balancing using Nginx
- Docker can be used for containerization

---

## 👨‍💻 Author

Naveenkumar
