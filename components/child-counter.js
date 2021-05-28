import React, { useState } from 'react'

function ChildCounter({ parentCount }) {
  const [count, setCount] = useState(0)

  console.log(`Rendering "ChildCounter", parentCount: ${parentCount}, count: ${count}`)

  return (
    <div className="child-comp">
      Parent Counter: {parentCount}
      <br/>
      Counter: {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )

}

export default ChildCounter
