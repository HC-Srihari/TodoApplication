import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCategory } from '../store/slice';

function AddCategory() {

    const [category,setCategory] = useState('');
    const dispatch = useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(category);
        dispatch(addCategory(category))
        setCategory('')
    }
  return (
    <>
    <h1 className='text-xl text-slate-300  mb-4'>Create your Todo Categories</h1>

      
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={category} onChange={(e)=>(setCategory(e.target.value))}
          className=" p-2 bg-gray-700 border-none outline-none border text-white border-gray-300 rounded-l-lg"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg ">
          Create
        </button>
      </form>
    </div>
      <p className='text-red-400'>Click on the category to create your Todo</p>
    </>
  )
}

export default AddCategory
