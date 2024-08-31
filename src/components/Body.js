import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/", 
            element: <Login />
        },
        {
            path: "/browse", 
            element: <Browse />  // if you are authenticated then only you will move to this page. 
        },
    ])
  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
