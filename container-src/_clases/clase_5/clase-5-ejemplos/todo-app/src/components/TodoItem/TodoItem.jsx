import React from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <li checked={todo.completed}
            onChange={onToggle}>
            <input
                type="checkbox"

            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={onDelete}> ❌ </button>
        </li >
    )
}

export default TodoItem