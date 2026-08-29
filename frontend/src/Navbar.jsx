import React from 'react'
import  { Link, useNavigate } from 'react-router-dom'
import { Button } from './components/ui/button'
import { button, div } from 'framer-motion/client'

const Navbar = () => {
  const navigate = useNavigate()
  
  // Check if user is logged in by verifying token existence
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    // 1. Remove token from browser storage
    localStorage.removeItem('token')
    
    // 2. Redirect user back to login page
    navigate('/')
  }

  return (
    <header className="w-full border-b bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand / Logo */}
        <Link to="/todos" className="text-xl font-bold tracking-tight text-primary">
          YOURS TODO
        </Link>

        {/* Navigation / Actions */}
        <nav className="flex items-center gap-4">
          {token ? (
            // Show Logout if logged in
            <Button 
              variant="destructive" 
              onClick={handleLogout}
              className="cursor-pointer"
            >
              Logout
            </Button>
          ) : (
            // Show Login / Register links if logged out
            <div className="flex gap-2">
              <Link to="/">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="default">Register</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar