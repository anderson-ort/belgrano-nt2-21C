import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, onToggle, onDelete }) => {
    return (

        <ul>
            {todos.map(
                (todo) => <
                    TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={() => onDelete(todo.id)}
                    onToggle={() => onToggle(todo.id)}
                />
            )}

        </ul>

    )
}

export default TodoList