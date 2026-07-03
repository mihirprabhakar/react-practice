import { useState } from 'react'

import './App.css'
import Product from './Product'
// import LotteryGame from './LotteryGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product n={3}/>
      {/* <LotteryGame /> */}
    </>
  )
}

export default App
