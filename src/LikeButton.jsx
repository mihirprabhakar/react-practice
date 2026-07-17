import React, { useState } from 'react'

const LikeButton = () => {
    const [isLiked,setIsLiked]=useState(false);
    const chechStatus=()=>{
        setIsLiked(!isLiked);
    }
  return (
    <div>
      <p onClick={chechStatus}>
        {isLiked?<i class="fa-solid fa-heart" style={{color:"red"}}></i>:<i class="fa-regular fa-heart"></i>}
      </p>
    </div>
  )
}

export default LikeButton
