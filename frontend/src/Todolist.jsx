import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'

const Todolist = ({ refreshTrigger, reloadList }) => { 
  const [collectedtask, setcollectedtask] = useState([])

  async function fetchTask() {
    const token = localStorage.getItem('token')

    if (!token) {
      console.log('No token found in localStorage')
      return
    }

    try {
      const getdata = await fetch('http://localhost:5000/getdata', {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      })

      if (!getdata.ok) return console.log('Error fetching tasks:', getdata.status)

      const datas = await getdata.json()
      setcollectedtask(datas)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchTask()
  }, [refreshTrigger])

  return (
    <div>
      <h1 className="font-bold text-lg mb-4">YOURS TODO</h1>
      <div>
        {collectedtask.length === 0 ? (
          <p className="text-muted-foreground text-sm">NO TASKS CREATED</p>
        ) : (
          [...collectedtask]
            .sort((a, b) => a.isCompleted - b.isCompleted)
            .map((item) => (
              <TodoItem key={item._id} item={item} fetchfunc={reloadList} /> 
            ))
        )}
      </div>
    </div>
  )
}

export default Todolist