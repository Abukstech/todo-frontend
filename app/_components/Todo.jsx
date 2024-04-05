"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {BsCircleFill , BsFillCheckCircleFill, BsTrash2Fill}  from "react-icons/bs"
import dayjs from 'dayjs';

const Todo = () => {
    const[todos, setTodos] = useState([]);

const fetchtasks = async () => {
  const result  =  await axios.get("https://todo-app-1o5j.onrender.com/get")

  setTodos(result.data)
}

useEffect(()=>{
fetchtasks()
}, [])

const handleEdit = (id,done) => {
    axios.put("https://todo-app-1o5j.onrender.com/update/" + id, {done})
    .then(response => console.log(response))
}

const handleDelete= (id ) => {
    axios.delete("https://todo-app-1o5j.onrender.com/delete/" + id)
    .then(response => console.log(response))
}

  return (
  <>

  {
    todos.length === 0 ? <div><h2>No Task Added Yet</h2></div> :
  
  todos.map(todo => (
    
    <div key={todo._id} onClick={()=>{handleEdit(todo._id)}} className='' >
<div className='flex items-center justify-between  bg-slate-400 text-white w-[345px] h-[25px] py-[2px] px-[4px]'>
<div className='flex items-center'>
{todo.done ? <BsFillCheckCircleFill className='mr-[5px] text-[15px] cursor-pointer '/> :   <BsCircleFill className='mr-[5px] text-[15px] cursor-pointer '/> }
         
         <h2 className={todo.done && "line-through"}>{todo.task}</h2> 
        
</div>


<div onClick={()=> {handleDelete(todo._id)}} >
<span className='ml-[4px] mr-[5px] '><BsTrash2Fill className='cursor-pointer'/></span>
</div>
</div>
<p >Created Task : {dayjs(todo.createdAt).format("DD MMM YYYY HH:mm A")}</p>
{todo.done && <span> Task Completed at: {dayjs(todo.completedAt).format("DD MMM YYYY HH:mm A")}</span>}
    </div>



  ))}
  </>
  )
}

export default Todo