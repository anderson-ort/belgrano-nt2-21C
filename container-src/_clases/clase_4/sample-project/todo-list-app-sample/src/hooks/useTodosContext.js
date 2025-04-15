import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContext"

export const useTodosContext = () => {
    return useContext(TodosContext)
}