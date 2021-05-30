// 03-nested-2-memo
// noinspection DuplicatedCode

import React, { useCallback, useState } from 'react'
import ChildUpdater from '../components/child-updater-name'

function ParentComponent() {
  // LEARNING POINT: "setRedCount" or "setBlueCount" will not change on each render
  // (call of ParentComponent).
  const [redCount, setRedCount] = useState(0)
  const [blueCount, setBlueCount] = useState(100)

  console.log(`Rendering ParentComponent, red: ${redCount}, blue: ${blueCount}`)

  function resetCounts() {
    setRedCount(0)
    setBlueCount(0)
  }

  // LEARNING POINT: A new copy of this closure (function) is created on every
  // render (call of ParentComponent).
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

  // fix callbacks

  // LEARNING POINT: incRed will change only if redCount changes
  const incRed = useCallback(incrementRedCount, [redCount])
  const decRed = useCallback(decrementRedCount, [redCount])

  const incBlue = useCallback(incrementBlueCount, [blueCount])
  const decBlue = useCallback(decrementBlueCount, [blueCount])

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
                      increment={incRed}
                      decrement={decRed} />

        <ChildUpdater name="blue"
                      increment={incBlue}
                      decrement={decBlue} />
      </main>
    </div>
  )
}

export default ParentComponent
