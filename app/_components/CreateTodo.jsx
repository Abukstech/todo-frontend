"use client"
import React, { useState } from 'react'
import axios from 'axios'

const CreateTodo = () => {
const [task , setTask]= useState("")

const handleAddTask = () =>{
 axios.post("https://todo-app-1o5j.onrender.com/create", {task})
 .then(response=> console.log(response))
}

  return (
    <div>
      <input type="text" className='border-2 py-2'  onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleAddTask} className='bg-blue-600 text-white px-4 py-2 ml-4  rounded-lg'>Add task</button>
    </div>
  )
}

export default CreateTodo