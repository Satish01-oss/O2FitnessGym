# 🏋️ O² Fitness Gym

A modern full-stack MERN Gym Management Web Application built with a focus on secure authentication, responsive UI, and scalable architecture.

> 🚧 This project is currently under active development. New features are being added regularly.

---

## ✨ Features

### 🔐 Authentication
- User Registration
- Email OTP Verification
- Secure JWT Authentication
- HTTP-only Cookie Authentication
- Google OAuth Login
- Logout Functionality
- Protected Routes

### 👤 User Profile
- Upload Profile Picture
- Change Profile Picture
- Remove Profile Picture
- Image Storage using ImageKit
- Default Avatar Support

### 🎨 Frontend
- Responsive Design
- React Context API Authentication
- Modern UI
- Reusable Components

### ⚙️ Backend
- Express.js REST API
- MongoDB Database
- Password Hashing with bcrypt
- Rate Limiting
- Middleware-based Authentication
- Secure Environment Variables

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

### Third Party Services
- Google OAuth
- ImageKit
- Nodemailer

---

## 📁 Project Structure

```
frontend/
backend/
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/O2FitnessGym.git
```

### Install Dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=
MONGODB_URI=
SECRET_KEY=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

EMAIL=
EMAIL_PASSWORD=
```

Create another `.env` inside frontend.

```env
VITE_API_URL=
VITE_GOOGLE_CLIENT_ID=
```

---

## 💻 Run Locally

Backend

```bash
npm start
```

Frontend

```bash
npm run dev
```

---

## 📌 Upcoming Features

- Membership Management
- Razorpay Integration
- Admin Dashboard
- Trainer Dashboard
- Workout Plans
- Attendance Tracking
- Payment History
- Notifications
- Profile Editing
- Password Reset

---

## 👨‍💻 Developer

**Satish Kumar Ram**

GitHub: https://github.com/Satish01-oss

LinkedIn: https://www.linkedin.com/in/satish-kumar-ram-468a5b321
