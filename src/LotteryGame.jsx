import React, { useState } from 'react'
import {getTicket,sum} from "./helper"
import "./LotteryGame.css"

const LotteryGame = () => {
    const[ticket,setTicket]=useState(getTicket(3));
    let isWinning=sum(ticket)===15;
    let buyTicket=()=>{
      setTicket(getTicket(3));
    }
    return (
      <div className="lottery-container">
        <h1> Lottery Ticket Game</h1>

        <div className="ticket">
          <span>{ticket[0]}</span>
          <span>{ticket[1]}</span>
          <span>{ticket[2]}</span>
        </div>

        <button onClick={buyTicket}> Generate New Ticket</button>

        {isWinning && (
          <h3 className="winner"> You Won! Congratulations! </h3>
        )}
      </div>
    )
}

export default LotteryGame