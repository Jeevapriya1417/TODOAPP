import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import React, { useState } from 'react'

const Todo = ({ fetchfunc }) => {
  const [task, settask] = useState('')

  async function handlesubmit(e) {
    e.preventDefault()

    const token = localStorage.getItem('token')

    if (!token) {
      console.log('No token found. Please log in.')
      return
    }

    try {
      const postdata = await fetch('https://todo-backend-itgo.onrender.com/postdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ task: task })
      })

      if (!postdata.ok) {
        return console.log('Error sending task:', postdata.status)
      }

      const data = await postdata.json()
      console.log('Task created')

      settask('')
      fetchfunc() // Triggers refresh in parent
    } catch (e) {
      console.log('Data could not be saved:', e)
    }
  }

  return (
    <div>
      <form onSubmit={handlesubmit} className="flex gap-2 my-4">
        <Input
          type="text"
          placeholder="Enter your todo..."
          value={task}
          required
          onChange={(e) => settask(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Todo