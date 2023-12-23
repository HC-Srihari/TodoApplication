import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slice';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function AddTodo() {
    const {type} = useParams()
  const [todo,setTododo] = useState('');
  const [errorMsg,setErrorMsg]= useState('')
    const dispatch = useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault()

        if(todo.trim().length === 0){
          setErrorMsg('Todo cannot be empty !!!');
          setTimeout(()=>{
            setErrorMsg('')
          },1500)
          setTododo('')
          return
        }
        
        const todoItem  = {
            category:type,
            text:todo.trim()
        }
        dispatch(addTodo(todoItem))
        setTododo('')
    }
  return (
    <>
    <h1 className='text-xl text-slate-300  mb-4'>{` TodoList of ${type}`}</h1>

      <Link to={'/'}>
        <button className="p-2 bg-blue-500 text-white rounded-md">Back to Home</button>
      </Link>
      
    <p className={`text-red-500 text-xl  h-3`}>{errorMsg}</p>
    <br />
    <div className="flex items-center justify-center">
  <form onSubmit={handleSubmit} className="flex mb-2">
    
    <input
      type="text"
      value={todo}
      onChange={(e) => setTododo(e.target.value)}
      className=" p-2 max-w-48  bg-gray-700 border-none outline-none border text-white border-gray-300 rounded-l-lg"
    />
    <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg ">
      Add Todo
    </button>
  </form>
  


</div>
    </>
  )
}

export default AddTodo
