// 03-nested-2
// noinspection DuplicatedCode

import React, { useState } from 'react'

function ParentComponent() {
  const [count, setCount] = useState(0)

  console.log('Rendering ParentComponent, count:', count)

  return (
    <div className="parent-comp">
      <h1>Nested Counter with 2 Children</h1>

      <main>
        Counter: {count}
        <br/>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <br/>

        <ChildA parentCount={count} />

        <ChildB updateParentCount={setCount} />
      </main>
    </div>
  )
}

function ChildA({ parentCount }) {
  const [count, setCount] = useState(0)

  console.log(`Rendering Child A, parentCount: ${parentCount}, count: ${count}`)

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

function ChildB({ updateParentCount }) {
  const [count, setCount] = useState(0)
  const [textValue, setTextValue] = useState('')

  console.log(`Rendering Child B, count: ${count}`)

  function handleSubmit(e) {
    e.preventDefault()
    updateParentCount(textValue)
  }

  return (
    <div className="child-comp">
      Counter: {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br/>
      <form>
        <label htmlFor="a">Set Parent Count:</label>
        <input id="a" type="text"
               value={textValue}
               onChange={(e) =>
                 setTextValue(e.target.value)} />
        <input type="submit" value="Set It" onClick={handleSubmit}/>
      </form>
    </div>
  )

}

export default ParentComponent
