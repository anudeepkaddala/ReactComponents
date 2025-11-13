import React, { useState } from 'react'
import Display from './Display';
import Controls from './Controls';

const Parents = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count +1);
    const decrement = () => setCount(count -1);
  return (
    <div>
        <Display count={count} />
        <Controls increment={increment} decrement={decrement} />
    </div>
  )
}

export default Parents