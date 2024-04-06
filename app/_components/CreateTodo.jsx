"use client"
import axios from 'axios'
import { useState } from 'react'
import Spinner from './Spinner'


const CreateTodo = () => {
const [task , setTask]= useState("");
const [isSubmitting , setIsSubmitting] = useState(false);


const handleAddTask = () =>{
  try {
    setIsSubmitting(true);
    axios.post("https://todo-app-1o5j.onrender.com/create", {task})
 .then(response=> {
  console.log(response)
  location.reload()
  setTask(" ")
  setIsSubmitting(false)
 })

 
    
  } catch (error) {
    console.log(error)
  }

}

  return (
    <div>
      <input type="text" className='border-2 py-2 mb-4 px-3'  onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleAddTask} className='bg-blue-600 text-white px-4 py-2 ml-4  rounded-lg'>Add task {isSubmitting && <Spinner />}</button>
    </div>
  )
}

export default CreateTodo