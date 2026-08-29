import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RegisterPg from './RegisterPg'
import Page from './Pages/Page' // Your To-Do Dashboard
import Login from './Login'
import Navbar from './Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* Register Page Route */}
        <Route path="/register" element={<RegisterPg />} />
         <Route path="/login" element={<Login />} />
        {/* Protected To-Do Dashboard Route */}
        <Route path="/todos" element={<Page />} />

        {/* Default route redirects to register for now */}
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App