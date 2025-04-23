import React from 'react'
import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'
import { useTodos } from '../../hooks/useTodos'
import { actions } from '../../constants/actions'

const TodoApp = () => {
  const { todos, dispatch } = useTodos()

  const handleAdd = todo => dispatch({ type: actions.ADD, payload: todo })
  const handleToggle = id => dispatch({ type: actions.TOGGLE, payload: id })
  const handleDelete = id => dispatch({ type: actions.DELETE, payload: id })

  return (
    <div>

      <h2> TODO list para ORT ✔️</h2>
      <TodoInput
        onAdd={handleAdd}
      />

      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default TodoApp