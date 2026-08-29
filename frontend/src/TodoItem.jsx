import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Input } from './components/ui/input'

const TodoItem = ({ item, fetchfunc }) => { 
  const [editId, seteditId] = useState('')
  const [editData, seteditData] = useState('')

  // Helper function to safely read current token on each request
  const getToken = () => localStorage.getItem('token')

  async function saveUpdatedData(id) {
    const token = getToken()
    try {
      const putdata = await fetch(`http://localhost:5000/putdata/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ task: editData })
      });
      
      if (!putdata.ok) return console.log('Error updating task');
      
      await putdata.json();
      fetchfunc();
      seteditId('')
    } catch(e) {
      console.log(e)
    }
  }

  async function toggleComplete() {
    const token = getToken()
    try {
      const response = await fetch(`http://localhost:5000/putdata/${item._id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json', // 🔑 Added Content-Type
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ isCompleted: !item.isCompleted })
      });

      if (!response.ok) return console.log('Error toggling complete status');

      fetchfunc(); 
    } catch (e) {
      console.log(e);
    }
  }

  const cancelUpdate = () => {
    seteditId('')
    seteditData('')
  }

  const handleedit = (data) => {
    seteditId(data._id);
    seteditData(data.task);
  }

  async function deleteData(id) {
    const token = getToken()
    try {
      const response = await fetch(`http://localhost:5000/deldata/${id}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        return console.log('Error deleting item from server')
      }

      fetchfunc();
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <Card className="my-2">
      <CardContent className="p-4">
        {item._id === editId ? (
          <div className="flex gap-2">
            <Input 
              type="text" 
              name='task' 
              value={editData} 
              onChange={(e) => seteditData(e.target.value)} 
            />
            <Button onClick={() => saveUpdatedData(item._id)}>Save</Button>
            <Button variant="outline" onClick={cancelUpdate}>Cancel</Button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <p style={{ 
              textDecoration: item.isCompleted ? 'line-through' : 'none',
              opacity: item.isCompleted ? 0.5 : 1 
            }}>
              {item.task}
            </p>
            <div className="flex gap-2 mt-2">
              <Button onClick={toggleComplete}>
                {item.isCompleted ? "Undo" : "Completed"}
              </Button>
              <Button onClick={() => handleedit(item)}>Update</Button>
              <Button variant="destructive" onClick={() => deleteData(item._id)}>Delete</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default TodoItem;