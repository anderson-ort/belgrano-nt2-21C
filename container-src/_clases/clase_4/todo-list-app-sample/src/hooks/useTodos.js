import React, { useEffect, useState } from 'react'
import { usePersist } from './usePersist'
import { fetchTodos } from '../api/todoApi'



export const useTodos = () => {

    const [todos, setTodos] = usePersist("todos", [])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(
        () => {

            setLoading(true)
            setError(false)

            fetchTodos().then(data => setTodos(data))
                .catch(error => setError(error.message))
                .finally(() => setLoading(false))


        }, [setTodos])

    return { todos, loading, error }
}