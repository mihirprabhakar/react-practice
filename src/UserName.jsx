import React from 'react'

const UserName = ({username,color}) => {
  return (
    <div>
      <p style={{color:color}}>Username : {username}</p>

    </div>
  )
}

export default UserName
