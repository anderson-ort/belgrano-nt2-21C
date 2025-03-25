import TodoItem from "./TodoItem"


export const TodoList = ({ todos }) => {
    return (
        <>
            <ul>
                {todos.map(
                    (todo) => (<TodoItem key={todo.id} {...todo} />)
                )}
            </ul>
        </>
    )
}