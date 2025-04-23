import { useEffect, useReducer } from "react"
import { KEY } from "../constants/globals"
import { actions } from "../constants/actions"
import { todoReducer } from "../reducers/todoReducer"

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [])

    useEffect(() => {
        const stored = localStorage.getItem(KEY)

        if (!stored) {
            dispatch(
                { type: actions.SET, payload: JSON.stringify(stored) }
            )
        }

    }, [])


    useEffect(() => { localStorage.setItem(KEY, JSON.stringify(todos)) }, [todos])


    return { todos, dispatch }
}