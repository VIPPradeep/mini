import React, { useState } from 'react'

const Increment = () => {
    const [product,setProduct]=useState(0)
    console.log(product)
  return (
    <div>
      <p>Count: {product}</p>
      <button onClick={()=>{setProduct(product+1)}}>Increment</button>
      <button onClick={()=>{setProduct(product-1)}}>Decrement</button>
    </div>
  )
}

export default Increment
