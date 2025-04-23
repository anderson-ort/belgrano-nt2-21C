import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggle, onDelete }) => {
    if (!todos) return (<span>No Hay tareas</span>)

    return (
        <ul>
            {todos.map(
                (todo) => (
                    <TodoItem
                        key={todos.id}
                        todo={todo}
                        onToggle={() => onToggle(todo.id)}
                        onDelete={() => onDelete(todo.id)}
                    />
                )
            )}
        </ul>
    )
}

export default TodoList