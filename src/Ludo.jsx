import React from 'react'
import './Products.css'
import { useState } from 'react';
// stated and objects 
const Ludo = () => {
    const [moves,setMoves]=useState({blue:0,green:0,yellow:0,red:0});
    const [count,setCount]=useState(0);
    const onButtonBlue=()=>{
        setMoves((prev)=>{
            return {...prev,blue:prev.blue+1};
        })
    }
    const onButtonYellow=()=>{
        setMoves((prev)=>{
            return {...prev,yellow:prev.yellow+1};
        })
    }
    const onButtonGreen=()=>{
        setMoves((prev)=>{
            return {...prev,green:prev.green+1};
        })
    }
    const onButtonRed=()=>{
        setMoves((prev)=>{
            return {...prev,red:prev.red+1};
        })
    }

  return (
    <div>
      <p>Game Begins !</p>
      <div className='board'>
        <p>Blue moves :{moves.blue}</p>
        <button onClick={onButtonBlue} style={{backgroundColor:"blue"}}>+1</button>
        <p>Green moves :{moves.green}</p>
        <button onClick={onButtonGreen} style={{backgroundColor:"green"}}>+1</button>
        <p>Yellow moves :{moves.yellow}</p>
        <button onClick={onButtonYellow} style={{backgroundColor:"yellow"}}>+1</button>
        <p>Red moves :{moves.red}</p>
        <button onClick={onButtonRed} style={{backgroundColor:"red"}}>+1</button>
      </div>
    </div>
  )
}

export default Ludo
