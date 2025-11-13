import React, { useReducer } from 'react';


const initialScore = [
  { id: 1, name: 'Alice', score: 0 },
  { id: 2, name: 'Bob', score: 0 },
  { id: 3, name: 'Charlie', score: 0 },
];

const reducer = (state, action) => {
  switch(action.type){
    case 'increase':
      return state.map(player =>  player.id===action.id ? {...player,score:player.score+1} : player);
    default:
      return state;
  }
}

const Score = () => {
  const [score, dispatch] = useReducer(reducer,initialScore);
  return (
    <>
      <h1>Score Board</h1>
      <ul>
        {score.map((player) => (
          <li key={player.id}>
            {player.name}:{player.score}
            <button onClick={() => dispatch({type:'increase', id:player.id})}>+</button>
          </li>
        ))}
      </ul>
    
    </>
  );
}


export default Score;