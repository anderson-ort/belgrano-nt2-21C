const URI = "https://jsonplaceholder.typicode.com/todos"

export const fetchTodos = async () => {
    const response = await fetch(URI)

    if (!response.ok) {
        return { msg: "Failed to fetch data" }
    }

    return response.json()
}