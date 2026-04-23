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

## Screenshots

<img width="1313" height="359" alt="image" src="https://github.com/user-attachments/assets/2ef3e7c5-7574-45e9-9f67-8a0b354fdfff" />

<img width="1155" height="299" alt="image" src="https://github.com/user-attachments/assets/eb69bdac-5a76-4bb1-8eb2-ec69e2691838" />

<img width="1195" height="323" alt="image" src="https://github.com/user-attachments/assets/b66c1133-e080-499b-abc4-3dabf481c0bc" />

<img width="1315" height="406" alt="image" src="https://github.com/user-attachments/assets/134c32ed-4b81-4929-9409-b095a2306a74" />

<img width="1358" height="724" alt="image" src="https://github.com/user-attachments/assets/57a6e82e-408d-427f-ad01-6dbab940b134" />

<img width="1307" height="654" alt="image" src="https://github.com/user-attachments/assets/25e99363-dd0a-43ad-abfc-c5842e60790c" />

<img width="1349" height="682" alt="image" src="https://github.com/user-attachments/assets/8684db36-09da-4d73-a06b-91cfdb8e9acf" />


## 👨‍💻 Author

Naveenkumar
