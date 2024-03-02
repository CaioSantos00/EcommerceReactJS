import { RouterProvider } from "react-router-dom"
import router from "./router"
import React, { createContext } from 'react';
import './assets/Sass/style.scss'

export const ProductContext = createContext(null)


function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 10, qtd: 100, description: 'description' },
    { id: 2, name: 'Product 2', price: 20, qtd: 150, description: 'description' },
    { id: 3, name: 'Product 3', price: 30, qtd: 300, description: 'description' },
  ];

  return (
    <>
    
    <ProductContext.Provider value={products}>
    <RouterProvider router={router} />
    </ProductContext.Provider>
    </>
    
  )
}

export default App
