import React, { useState } from 'react'
import { toggleCompleted,deleteTodo,updateTodo } from '../store/slice';
import {useDispatch} from 'react-redux'

function TodoList({todo}) {

    const [complete,setComplete]  = useState(false);
    const dispatch = useDispatch()
    const [todoText,setTodoText] = useState(todo.text)
    const [isEditable,setIsEditable] = useState(false)
    
    const handleToggle=()=>{
        setComplete(!complete);
        dispatch(toggleCompleted(todo.id))
    }

    const handleDelete = (id)=>{
        dispatch(deleteTodo(id))
    }

    const handleEdit = ()=>{
        const editedInfo = {
            id:todo.id,
            text:todoText
        }
        dispatch(updateTodo(editedInfo))
        setIsEditable(!isEditable)
    }

  return (
    <div
          className={`max-w-screen flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 mt-2 mb-4 -mx-2  text-black ${
              todo.completed ? "bg-gray-400" : "bg-green-600"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer bg-blue-600"
              checked={todo.completed}
              onChange={handleToggle}
          />
          <div className='w-32 max-w-screen'>

          <input
              type="text"
              className={`border outline-none w-full p-2   bg-transparent rounded-lg  ${todo.completed ? "line-through" : ""}  ${
                  isEditable ? "border-black/10 px-2" : "border-transparent"
              } `}
              value={todoText}
              onChange={(e)=>(setTodoText(e.target.value))}
              
              readOnly={!isEditable}
          />
          </div>
          <button
              className="inline-flex mt-1 w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isEditable) {
                      handleEdit();
                  } 
                  else
                   setIsEditable(!isEditable)
              }}
              disabled={todo.completed}
          >
              {isEditable ? "📁" : "✏️"}
          </button>
          <button
              className="inline-flex mt-1 w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50  hover:bg-gray-100 shrink-0"
              onClick={() => handleDelete(todo.id)}
          >
              ❌
          </button>
      </div>

  )
}

export default TodoList
