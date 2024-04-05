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
      <input type="text"  onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleAddTask}>Add task</button>
    </div>
  )
}

export default CreateTodo