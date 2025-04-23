import React from 'react'


const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <li
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}>

            <input type="checkbox" name="" id="" />
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> {todo.text}
            </span>

            <button onClick={onDelete}> ✔️ </button>
        </li>

    )
}

export default TodoItem