import React from 'react'
import "./Products.css"
import Price from './Price'

const Products = ({title,idx}) => {
    let olda=["100","200","300","400"];
    let newa=["95","195","295","395"];
    let desc=[["desc1.1","desc1.2"],["desc2.1","desc2.2"],["desc3.1","desc3.2"],["desc4.1","desc4.2"]];
  return (
    <div className='products'>
      <h2>{title}</h2>
      <p>{desc[idx][0]}</p>
      <p>{desc[idx][1]}</p>

      <Price olda={olda[idx]} newa={newa[idx]}/>
    </div>
  )
}

export default Products
