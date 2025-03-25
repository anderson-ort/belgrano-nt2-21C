import React from 'react'
// import { useTodos } from '../../hooks/useTodos'
import Spinner from '../Spinner/spinner'
import { TodoList } from './TodoList'
import { useTodosContext } from '../../hooks/useTodosContext'

const TodoComponent = () => {

  const { todos, loading, error } = useTodosContext() //useTodos()

  if (loading) return <Spinner />
  if (error) return <p>Error: {error}</p>

  return (<>
    <h2>TODO LIST</h2>
    <TodoList todos={todos} />
  </>)
}

export default TodoComponent