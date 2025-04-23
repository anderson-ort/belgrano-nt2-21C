import React from 'react'
import { useTodos } from '../hooks/useTodos'
import { actions } from '../constants/todoConstants'
import TodoList from './TodoList'
import TodoInputContainer from './TodoInputContainer'

const TodoApp = () => {
    const { todos, dispatch } = useTodos()
    const handleAdd = todo => dispatch({ type: actions.ADD, payload: todo })
    const handleToggle = id => dispatch({ type: actions.TOGGLE, payload: id })
    const handleDelete = id => dispatch({ type: actions.DELETE, payload: id })


    return (
        <>
            <h2> TODO list ORT 📃</h2>
            <TodoInputContainer onAdd={handleAdd} />
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onDelete={handleDelete} />
        </>
    )
}

export default TodoApp