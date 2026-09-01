# 📝 Full-Stack MERN Todo Application

A modern, responsive full-stack task management application built with the **MERN** stack (MongoDB, Express, React, Node.js). Features secure user authentication powered by JSON Web Tokens (JWT), protected API routes, database persistence with MongoDB Atlas, and a mobile-friendly UI built with Tailwind CSS and Shadcn UI components.

---

## 🚀 Live Demo

- **Frontend Application (Vercel):** [todoapp-a5121plp0-jeeva-8bd2.vercel.app](todoapp-a5121plp0-jeeva-8bd2.vercel.app)
- **Backend API (Render):** [https://todo-backend-itgo.onrender.com](https://todo-backend-itgo.onrender.com)

---

## ✨ Features

- **JWT Authentication:** Secure user registration, login, and session persistence using local storage.
- **Protected API & Client Routes:** Custom authorization middleware (`authmiddleware.js`) verifies bearer tokens before granting access to user endpoints.
- **Full Task CRUD Operations:** Create, read, update, and delete daily todo items tied to specific authenticated users.
- **Dynamic Navigation Bar:** Context-aware `Navbar` component that toggles navigation links and action buttons based on user login state.
- **Responsive UI Design:** Optimized layout for desktop, tablet, and mobile screens implemented with Tailwind CSS and Shadcn UI components.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 + Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS, Shadcn UI
- **Deployment:** Vercel

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas with Mongoose ODM
- **Security & Auth:** JSON Web Token (`jsonwebtoken`), `dotenv`, CORS
- **Deployment:** Render

---

## 📁 Project Structure

```text
TODOAPP/
├── backend/
│   ├── authmiddleware.js   # JWT authentication verification middleware
│   ├── route.js            # Protected Todo CRUD routes
│   ├── schema.js           # Mongoose Todo schema
│   ├── server.js           # Express app initialization & DB connection
│   ├── userRoute.js        # Auth routes (Register/Login)
│   ├── userschema.js       # Mongoose User schema
│   └── .env                # Private environment variables (ignored by Git)
├── frontend/
│   ├── src/
│   │   ├── components/     # Shadcn UI reusable components
│   │   ├── Pages/          # Route page views (Dashboard/Todos)
│   │   ├── App.jsx         # React router setup & global layout
│   │   ├── Login.jsx       # Login view
│   │   ├── Navbar.jsx      # Navigation & logout handling
│   │   ├── RegisterPg.jsx  # User registration view
│   │   └── Todo.jsx        # Core Todo logic & UI
│   └── vite.config.js      # Vite build configuration
└── .gitignore              # Shared repository rules for secrets & node_modules

🚀 Local Installation & Setup
1. Clone the Repository
Bash
git clone [https://github.com/Jeevapriya1417/TODOAPP.git](https://github.com/Jeevapriya1417/TODOAPP.git)
cd TODOAPP
2. Backend Setup
Navigate to the backend directory and install dependencies:

Bash
cd backend
npm install
Create a .env file inside the backend folder and add your environment variables:

Code snippet
PORT=5000
MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster.mongodb.net/todoapp?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key
Start the backend development server:

Bash
npm start
3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and install dependencies:

Bash
cd frontend
npm install
Start the React development server:

Bash
npm run dev
📡 Deployment Overview
Backend: Hosted as a Web Service on Render, connected to MongoDB Atlas.

Frontend: Hosted on Vercel with the root directory configured to ./frontend.

📄 License
This project is open-source and available under the MIT License.