"use client"
import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { BsFillTrashFill } from "react-icons/bs";

const Todo = () => {
    const[todos, setTodos] = useState([]);

const fetchtasks = async () => {
  const result  =  await axios.get("https://todo-app-1o5j.onrender.com/get")

  setTodos(result.data)
}

useEffect(()=>{
fetchtasks()
}, [])

const handleEdit = (id, isChecked) => {
  const done = isChecked;
    axios.put("https://todo-app-1o5j.onrender.com/update/" + id , {done} )
    .then(response => {
     console.log(response)
     location.reload()
    })
    fetchtasks();
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
<div className='flex items-center justify-between  bg-white border-2 border-black py-3 text-black w-[200px] md:w-[345px] h-[40px]  px-3'>
<div className='flex items-center'>
         <input type='checkbox' className='mr-[5px] text-[15px] cursor-pointer' checked={todo.done}
         onChange={e => handleEdit(todo._id, e.target.checked)}
         />
         <h2 className={todo.done && "line-through"}>{todo.task}</h2> 
        
</div>


<div onClick={()=> {handleDelete(todo._id)}} >
<span className='ml-[4px] mr-[5px] '><BsFillTrashFill className='cursor-pointer ' color='red'/></span>
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