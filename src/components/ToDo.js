// Practice Task.
// Write a small TodoList component:
// • Render a list of default todos.
// • Each todo shows a "Delete" button.
// • Remove from state on delete.
import React, { useState } from 'react'

const ToDo = () => {

    const [defaultToDos,setDefaultToDos] = useState([
        'Learn React',
        'Learn JavaScript',
        'Build a ToDo App',
        'Master React Hooks'
    ]);

    const handleDelete = (index) => {
        const newToDos = [...defaultToDos];
        newToDos.splice(index, 1);
        setDefaultToDos(newToDos);
    }

  return (
    <>
    <ul>
        {defaultToDos.map((todo, index) => {
            return (
                <li key = {index}>
                    {todo} <button onClick={ () => handleDelete(index)}>Delete</button>
                </li>
            )
        })}
    </ul>
    </>
  )
}

export default ToDo