import React, { useState } from 'react'

function ChildUpdater({ increment, decrement }) {
  const [count, setCount] = useState(0)

  console.log(`Rendering "ChildUpdater", count: ${count}`)

  return (
    <div className="child-comp">
      Counter: {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br/>
      <br/>
      <h3>Parent Updater</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )

}

export default React.memo(ChildUpdater)
