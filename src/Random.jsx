import React from 'react'
import { useState } from 'react';

const Random = () => {
    const[randomn,setRandomn]=useState("_ _");

    const randomNumber=()=>{
        const num=Math.floor(Math.random()*100)+1;
        setRandomn(num);
    }
  return (
    <div>
      <h2>Random Number</h2>
      <p>{randomn}</p>
      <button onClick={randomNumber}>random number</button>
    </div>
  )
}

export default Random
