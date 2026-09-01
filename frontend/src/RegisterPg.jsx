import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // 1. Added Router Imports
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'

const RegisterPg = () => {
  const [datas, setdatas] = useState({ username: '', email: '', password: '' })
  const navigate = useNavigate() // 2. Initialized Navigation Hook

  const handlechange = (e) => {
    setdatas({ ...datas, [e.target.name]: e.target.value })
  }

  const postdatas = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://todo-backend-itgo.onrender.com/postuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datas)
      })
      if (!response.ok) return console.log('Error Posting Data')
      
      const result = await response.json()
      console.log(result)
      setdatas({ username: '', email: '', password: '' })

      // 3. Redirect to login page on success
      navigate('/login') 

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md border shadow-sm">
        <CardHeader>
          <CardTitle className="text-center font-bold">CREATE AN ACCOUNT</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={postdatas} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold">Username</label>
              <Input type="text" name="username" placeholder="example123" value={datas.username} onChange={handlechange} required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold">Email</label>
              <Input type="email" name="email" placeholder="example123@gmail.com" value={datas.email} onChange={handlechange} required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold">Password</label>
              <Input type="password" name="password" placeholder="••••••••" value={datas.password} onChange={handlechange} required />
            </div>
            <Button type="submit" className="mt-2 w-full cursor-pointer">Submit</Button>
          </form>

          {/* 4. Added Link to Login Page */}
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterPg