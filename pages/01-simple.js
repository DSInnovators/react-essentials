// 01-simple
import React, { useState } from 'react'

function SimpleComponent() {
  const [count, setCount] = useState(0)

  console.log('Rendering SimpleComponent, count:', count)

  return (
    <>
      <header>
        <h1>Simple Counter</h1>
      </header>

      <main>
        Counter: {count}
        <br/>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </main>
    </>
  )
}

export default SimpleComponent
