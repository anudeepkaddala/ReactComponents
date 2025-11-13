import React, { useReducer, useState } from 'react';


const reducer=(state, action) => {
  switch(action.type){
    case 'add':
      return [...state, {id:action.id, text:action.text, completed:false}];

    case 'reset':
      return [];

    case 'delete':
      return state.filter(todo => todo.id !==action.id);

    case 'toggle':
      return state.map(todo => todo.id ===action.id ? {...todo, completed:!todo.completed} : todo);

    default:
      return state;
  }
} 
const TaskReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState('');


  const handleAdd = () => {
    if(input.trim() ==='') return;
    dispatch({id:Date.now(),type:'add', text:input});
    setInput('');
  }
  return (
    <div>
      <h2>Task App Component</h2>
      <input type="text" placeholder='enter task' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>

      <ul>
        {todos.map( todo => (
          <li key={todo.id} style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}>
            {todo.text}
             <span onClick={() => dispatch({ type: 'toggle', id: todo.id })}>
               {todo.text}
            </span>
             <button
              onClick={() => dispatch({ type: 'delete', id: todo.id })}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TaskReducer;