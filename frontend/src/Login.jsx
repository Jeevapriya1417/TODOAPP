import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'

const Login = () => {
  const [data, setdata] = useState({ email: '', password: '' })
  const navigate = useNavigate() 

  async function sendLoginData(e) {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        return console.log('Error Posting Data')
      }

      const result = await response.json()
      console.log('Login Response:', result)

      // 🔑 FIX: Read from result.token instead of data.token!
      if (result.token) {
        localStorage.setItem('token', result.token)
        setdata({ email: '', password: '' })
        navigate('/todos') 
      } else {
        console.log('Token missing in backend response:', result)
      }

    } catch (e) {
      console.log('Server error. Please try again later:', e)
    }
  }

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md border shadow-sm">
        <CardHeader>
          <CardTitle className="text-center font-bold">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={sendLoginData} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="example123@gmail.com"
                value={data.email}
                onChange={handlechange}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold">Password</label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                value={data.password}
                onChange={handlechange}
                required
              />
            </div>
            <Button type="submit" className="mt-2 w-full cursor-pointer">
              Submit
            </Button>
          </form>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-primary underline">
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login