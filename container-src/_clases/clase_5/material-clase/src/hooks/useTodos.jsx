import { useEffect, useReducer } from "react"
import { actions } from "../constants/todoConstants"
import { todoReducer } from "../reducers/todoReducer"

const KEY = "todos"

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [])

    useEffect(() => {
        const stored = localStorage.getItem(KEY)

        if (!stored) {
            dispatch({ type: actions.SET, payload: JSON.parse(stored) })
        }


    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos))
    },
        [todos])


    return { todos, dispatch }
}