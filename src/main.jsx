import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import CategoryContainer from './pages/CategoryContainer.jsx'
import TodoContainer from './pages/TodoContainer.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<CategoryContainer/>
      },
      {
        path:'/category',
        element:<CategoryContainer/>
      },
      {
        path:'/:type',
        element:<TodoContainer/>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
  
)
