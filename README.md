# 📝 Full-Stack MERN Todo Application

A modern full-stack task management application built with the **MERN** stack (MongoDB, Express, React, Node.js). Features secure user authentication powered by JSON Web Tokens (JWT), protected API routes, and a responsive UI built with Tailwind CSS and Shadcn UI components.

---

## ✨ Features

- **JWT Authentication:** Secure User Registration, Login, and Session Logout.
- **Protected API & Client Routes:** Custom authorization middleware (`authmiddleware.js`) verifies bearer tokens before granting access to user endpoints.
- **Full Task CRUD Operations:** Create, read, update, and delete daily todo items tied to specific authenticated users.
- **Dynamic Navigation Bar:** Context-aware `Navbar` component that toggles navigation links and action buttons based on user login state.
- **Modern UI Design:** Clean styling implemented with Tailwind CSS and accessible Shadcn UI components.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 + Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS, Shadcn UI
- **Icons:** Lucide React / SVG Assets

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Security & Auth:** JSON Web Token (`jsonwebtoken`), `dotenv`, CORS

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
git clone [https://github.com/JEEEVAPRIYA-R/mern-todo-app.git](https://github.com/JEEEVAPRIYA-R/mern-todo-app.git)
cd TODOAPP

2. Backend Setup
Navigate to the backend directory and install dependencies:

Bash
cd backend
npm install

Create a .env file inside the backend folder and add your environment variables:

PORT=5000
MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster.mongodb.net/todoapp
JWT_SECRET=your_super_secret_jwt_key

Start the backend server:
Bash
npm start
# or for development mode:
npm run dev

3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and install dependencies:
Bash
cd frontend
npm install

Start the React development server:
Bash
npm run dev
