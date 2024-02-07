import { RouterProvider } from "react-router-dom"
import router from "./router"
import React from 'react';
import './assets/Sass/style.scss'

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
    
  )
}

export default App
