import React, { useState } from 'react'

const LikeButton = () => {
    const [isLike,setIsLike]=useState(false);
    const chechStatus=()=>{
        setIsLike(!isLike);
    }
  return (
    <div>
      <p onClick={chechStatus}>
        {isLike?<i class="fa-solid fa-heart" style={{color:"red"}}></i>:<i class="fa-regular fa-heart"></i>}
      </p>
    </div>
  )
}

export default LikeButton
