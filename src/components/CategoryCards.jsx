import React, { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deleteCategory} from '../store/slice'

function CategoryCards() {
    const [cards,setCards] = useState([])
    const dispatch = useDispatch()

    const handleDelete = (name)=>{
        dispatch(deleteCategory(name))
    }

    const temp = useSelector((state)=>state.categories)
   useEffect(() => {
    setCards(temp);
  }, [temp]);

    if(cards.length === 0){
        return(
            <h1 className='text-xl m-2 p-2 text-slate-300' >empty categories</h1>
        )
    }

  return (
    <>
    
    { cards && cards.map((card)=>(
      <div  key={card.name} className='bg-emerald-800 w-auto max-w-sm h-40 rtl m-4 p-2 rounded-xl relative overflow-hidden'>
        <button
          className="absolute top-2 -pl-4  right-2 w-10 h-10 rounded-lg text-sm border border-black/10 justify-center items-center mx-auto bg-gray-50 hover:bg-gray-100"
          onClick={() => handleDelete(card.name)}
        >
        ❌
        </button>
      <Link to={`/${card.name}`} key={card.name} className='flex flex-wrap items-center justify-center h-full'>
        <div className='bg-emerald-800 text-center'>
          <h1 className='text-slate-100 mx-auto overflow-ellipsis overflow-hidden whitespace-nowrap text-2xl'>
            {card.name}
          </h1>
        </div>
      </Link>
    </div>
    ))}
    </>
  )
}

export default CategoryCards
