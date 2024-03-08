import { RouterProvider } from "react-router-dom"
import router from "./router"
import React, { createContext, useState} from 'react';
import './assets/Sass/style.scss'

export const ProductContext = createContext(null)


function App() {
  const [productsCar, setProductsCar] = useState([])
  const products = [
    { id: 1, name: 'Product 1', price: 10, qtd: 1, description: 'description', tam: ["PP", "P", "M"]},
    { id: 2, name: 'Product 2', price: 20, qtd: 1, description: 'description', tam: ["PP", "P", "M", "G", "GG"]},
    { id: 3, name: 'Product 3', price: 30, qtd: 1, description: 'description', tam: ["PP", "M", "G"]},
  ];
  
  function addCart(productAdd) {
    setProductsCar([...productsCar, productAdd])
  }

  return (
    <>
    
    <ProductContext.Provider value={{products, productsCar, addCart}}>
    <RouterProvider router={router} />
    </ProductContext.Provider>
    </>
    
  )
}

export default App
