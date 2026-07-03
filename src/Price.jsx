import React from 'react'
import "./Products.css"
const Price = ({olda,newa}) => {
  return (
    <div className='price'>
      <span style={{textDecorationLine:"line-through"}}>{olda}</span>
      &nbsp;&nbsp;
      <span style={{fontWeight:"bold"}}>{newa}</span>
    </div>
  )
}

export default Price
