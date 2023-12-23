import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TodoList from './TodoList'

function CategoryTodo() {
    const {type} = useParams()
    const todos = useSelector((state)=>state.todos)
  return (
   
      <div>
      {
        todos.map((todo) => (
          todo.category === type ? (
            
            <TodoList todo={todo} key={todo.id}/>
          ) : null
        ))
      }
    </div>
  )
}

export default CategoryTodo




