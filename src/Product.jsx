import React from 'react'
import {useState} from "react";
const Product = ({n}) => {
    const[count,setCount]=useState(0);
    const clickBy=()=>{
        setCount(()=>{
            return count+1;
        });
        console.log(count);
    }
  return (
    <div>
      <p>this is a para</p>
      <h1>hello how are you?</h1>
      <p>count is : {count}</p>
      <button onClick={clickBy}>Increase the count</button>
      <p>this is value of n :{n}</p>
    </div>
  )
}

export default Product
