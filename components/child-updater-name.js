import React, { useState } from 'react'

function ChildUpdater({ name, increment, decrement }) {
  const [count, setCount] = useState(0)

  console.log(`Rendering "ChildUpdater-${name}", count: ${count}`)

  return (
    <div className="child-comp">
      Local Counter: {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br/>
      <h3>{name} Parent Updater</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )

}

export default React.memo(ChildUpdater)
