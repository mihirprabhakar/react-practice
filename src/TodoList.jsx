import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
// import { useState } from 'react'
import './TodoList.css'
const TodoList = () => {
    const [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    const[addTask,setAddTask]=useState("");

    let addNewTask=()=>{
        setTodos((prev)=>{
            return [...prev,{task:addTask,id:uuidv4(),isDone:false}];
        })
        setAddTask("");
        console.log(todos);
    };
    let onInputChange=(event)=>{
        // console.log("added something");
        setAddTask(event.target.value)
    }

    let removeTask=(id)=>{
        console.log(id);
        console.log("trying to remove this task");
        setTodos((prev)=>{
            return prev.filter((todo)=>todo.id!==id)
        });
        // setTodos(newTodo);
    }

    let doneTask=(id)=>{
        setTodos((prev)=>
        prev.map((todo)=>{
            if(todo.id===id){
                return{...todo,isDone:true};
            }
            else{
                return todo;
            }
        })
        );
    };

    let allDone=()=>{
        setTodos((prev)=>prev.map((todo)=>{
            return{...todo,isDone:true};
        }))
    }
  return (
    <div>
      <p>hello</p>
      <input placeholder='Add a task' value={addTask} onChange={onInputChange} className="task-input"/>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={addNewTask}>add task</button>
      <hr/>
      <h4>Todo list </h4>
      <ul className="todo-list">
        {todos.map((todo) => (
            <li className="todo-item" key={todo.id}>
            <span
                style={todo.isDone ? { textDecoration: "line-through" } : {}}
            >
                {todo.task}
            </span>

            <div className="btn-group">
                <button onClick={() => removeTask(todo.id)}>Remove</button>
                <button onClick={() => doneTask(todo.id)}>Mark as done</button>
            </div>
            </li>
            //todos.map((task)=>(
            //    <li>{task}</li>;
            //))    ->here we use () so no need to return
        ))}
        </ul>
      <button onClick={allDone}>Mark all as done</button>
    </div>
  )
}

export default TodoList
