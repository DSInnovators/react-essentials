// 03-nested-2-memo
// noinspection DuplicatedCode

import React, { useState } from 'react'
import ChildUpdater from '../components/child-updater-name'

function ParentComponent() {
  const [redCount, setRedCount] = useState(0)
  const [blueCount, setBlueCount] = useState(100)

  console.log(`Rendering ParentComponent, red: ${redCount}, blue: ${blueCount}`)

  function resetCounts() {
    setRedCount(0)
    setBlueCount(0)
  }

  function incrementRedCount() {
    setRedCount(redCount + 1)
  }

  function decrementRedCount() {
    setRedCount(redCount - 1)
  }

  function incrementBlueCount() {
    setBlueCount(blueCount + 1)
  }

  function decrementBlueCount() {
    setBlueCount(blueCount - 1)
  }

  return (
    <div className="parent-comp">
      <h1>Nested Counter with 2 Children</h1>

      <main>
        <div className="counters-container">
          <div className="red">Red Counter: {redCount}</div>
          <div className="blue">Blue Counter: {blueCount}</div>
        </div>
        <br/>

        <button onClick={resetCounts}>Reset Counters</button>

        <br/>

        <ChildUpdater name="red"
                      increment={incrementRedCount}
                      decrement={decrementRedCount} />

        <ChildUpdater name="blue"
                      increment={incrementBlueCount}
                      decrement={decrementBlueCount} />
      </main>
    </div>
  )
}

export default ParentComponent
