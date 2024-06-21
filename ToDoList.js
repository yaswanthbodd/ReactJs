//Curd Operations
import React, { useState } from 'react'

const ToDoList = () => {
    const [todoList,setTodoList] = useState([])
    const [newTask,setNewTask] = useState("")

    const handleChange=(event)=>{
        setNewTask(event.target.value)
    }

    const addTask = ()=>{
        // const newTodoTask = [...todoList,newTask]
        // setTodoList(newTodoTask)
        setTodoList([...todoList,newTask])
    }

  return (
    <div>
        <div className='addTask'>
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
            {todoList.map((task)=>{
                return <h1>{task}</h1>
            })}
        </div>
    </div>
  )
}

export default ToDoList