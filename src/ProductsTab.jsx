import React from 'react'
import Products from './Products'
import "./Products.css"
const ProductsTab = () => {
  return (
    <div className='tab'>
      <Products title="mouse" idx={0}/>
      <Products title="keyboard" idx={1}/>
      <Products title="phone" idx={2}/>
      <Products title="laptop" idx={3}/>
      
    </div>
  )
}

export default ProductsTab
