import React from 'react'
import styles from "./styles/TodoItem.module.css"


const TodoItem = ({ id, title, completed }) => {


    return (
        <li key={id} className={`${styles.todo} border-b p-2`}>
            <span className={completed ? "line-through text-gray-500" : ""}>{title}</span>
        </li>
    )
}

export default TodoItem