import React from 'react'
import { useReducer } from 'react';
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        case 'SetValue':
            return 10;
        default:
            return state;
    }
}


const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer,0);
  return (
    <div>
      <h1>CounterReducer Component</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({type:'INCREMENT'})}>Increase</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>Decrease</button>
      <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
      <button onClick={() => dispatch({type:'SetValue'})}>Set Value to 10</button>

    </div>
  )
}

export default CounterReducer