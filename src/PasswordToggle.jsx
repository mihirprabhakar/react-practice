import  { useState } from 'react'

const PasswordToggle = () => {
    const [showPassword,setShowPassword]=useState(false);
    const showPasswordButton=()=>{
        setShowPassword(!showPassword);
    }
  return (
    <div>
      <input type={showPassword?"text":"password"} placeholder='enter the password'></input>
      <button onClick={showPasswordButton}>{showPassword?"Hide":"Show"}</button>
    </div>
  )
}

export default PasswordToggle
