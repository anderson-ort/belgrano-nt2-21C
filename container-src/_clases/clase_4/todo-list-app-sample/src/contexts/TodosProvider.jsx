
import { fetchTodos } from "../api/todoApi"
import { useEffect } from "react"
import { usePersist } from "../hooks/usePersist"
import { useState } from "react"
import { TodosContext } from "./TodosContext"


export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = usePersist("todos", [])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(
        () => {

            setLoading(true)
            setError(false)

            fetchTodos()
                .then(data => setTodos(data))
                .catch(error => setError(error.message))
                .finally(() => setLoading(false))


        }, [setTodos])

    const handleRefresh = () => {
        setLoading(true)
        setError(null)
        console.log("refreshing data from localstorage");

        const item = localStorage.getItem("todos")
        console.log(item);

        setTimeout(
            () => {

                setTodos(item ? JSON.parse(item) : [])
                setLoading(false)
            }
            , 2000)


    }

    const handleClearLocalStorage = () => {
        console.log("Borrando data desde el local storage");

        localStorage.removeItem("todos")
        setTodos([])
    }

    const handleGetFromApi = () => {
        setLoading(true)
        setError(null)
        fetchTodos()
            .then((data) => setTodos(data))
            .then(() => console.log("this data is fetched by the api")
            )
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }


    return (

        <TodosContext.Provider value={
            { todos, loading, error, handleClearLocalStorage, handleGetFromApi, handleRefresh }
        }>{children}</TodosContext.Provider>

    )
}