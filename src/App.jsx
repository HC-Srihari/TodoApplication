import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCategory from './components/AddCategory'
import CategoryCards from './components/CategoryCards'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'

function App() {

  const state = useSelector((state) => state);

  useEffect(() => {
    // Save the state to localStorage whenever it changes
    localStorage.setItem('todoApp', JSON.stringify(state));
  }, [state]);

  return(
    <>
    
    <Outlet/>
    
    </>
  )
}

export default App
