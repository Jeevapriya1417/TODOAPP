import React, { useState } from 'react'
import Todo from '../Todo'
import Todolist from '../Todolist'

const Page = () => {
  const [trigger, setTrigger] = useState(0)

  const reloadList = () => {
    setTrigger(prev => prev + 1) // 🔄 Increments trigger state
  }

  return (
    <div className="container mx-auto max-w-2xl p-4">
      {/* Creation form updates the trigger */}
      <Todo fetchfunc={reloadList} />
      
      {/* 🔑 PASS reloadList to Todolist so child components can trigger it! */}
      <Todolist refreshTrigger={trigger} reloadList={reloadList} />
    </div>
  )
}

export default Page