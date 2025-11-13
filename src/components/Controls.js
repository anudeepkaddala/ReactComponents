import React from 'react'

const Controls = ({increment, decrement}) => {
  return (
    <div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default Controls