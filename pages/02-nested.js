// 02-nested
import React, { useState } from 'react'

function ParentComponent() {
  const [count, setCount] = useState(0)

  console.log('Rendering ParentComponent, count:', count)

  return (
    <div className="parent-comp">
      <h1>Nested Counter</h1>

      <main>
        Counter: {count}
        <br/>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <br/>
        <ChildComponent parentCount={count}/>
      </main>
    </div>
  )
}

function ChildComponent({ parentCount }) {
  const [count, setCount] = useState(0)

  console.log(`Rendering ChildComponent, parentCount: ${parentCount}, count: ${count}`)

  return (
    <div className="child-comp">
      Counter: {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )

}

export default ParentComponent
