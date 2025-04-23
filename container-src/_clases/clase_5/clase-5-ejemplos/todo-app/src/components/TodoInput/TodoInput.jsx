import React, { useRef, useState } from 'react'

const TodoInput = ({ onAdd }) => {

    const [text, setText] = useState("")
    const inputRef = useRef(null)


    const handleAdd = () => {
        if (!text.trim()) return

        const todo = {
            id: new Date().getMilliseconds(),
            text,
            completed: false
        }


        console.log(todo)

        onAdd(todo)

        setText("")

        inputRef.current?.focus()

    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') { handleAdd() }

    }

    return (
        <div>
            <input
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)} // mira cada caracter
                onKeyDown={handleKeyDown}
                placeholder='... ingrese tarea' />
            <button onClick={handleAdd}> Agregar Todo</button>
        </div>
    )
}

export default TodoInput