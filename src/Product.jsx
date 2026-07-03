import React from 'react'
import {useState} from "react";
const Product = ({n,features}) => {
  console.log(features);
    const[count,setCount]=useState(0);
    const [loading,setLoading]=useState(false);
    const stylingAdd={backgroundColor:"black",color:"white"};
    const setTheLoad=()=>{
      setLoading(!loading);
    }
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
      {/* <p>{features}</p> */}
      <ul>
      {features.map((feature)=>{
        return <li key={feature}>{feature}</li>
      })}</ul>
      {/* <p>{features}</p> */}
      <button onClick={setTheLoad} style={stylingAdd}>Load the page</button>
      {loading&&(
        <p>Loading the entire page</p>
      )}
    </div>
  )
}

export default Product
