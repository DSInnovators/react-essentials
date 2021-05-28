// 03-nested-2-memo
import React, { useCallback, useState } from 'react'
import ChildCounter from '../components/child-counter'
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

  // fix callbacks

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
