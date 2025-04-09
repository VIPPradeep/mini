import React, { useState } from 'react'

const Counter = () => {

  const [timer,setTimer]=useState(10)
  return (
    <div>
        <p>Countdown Timer : {timer}</p>
        <button onClick={()=>{
            
        }}>Start</button>
      
    </div>
  )
}

export default Counter
