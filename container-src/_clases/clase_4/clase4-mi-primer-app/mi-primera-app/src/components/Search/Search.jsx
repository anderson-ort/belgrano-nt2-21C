import React, { useRef, useState } from 'react'

const Search = () => {
    const textInput = useRef(null)
    const initValueInput = "Hola mundo ..."

    const [texto, setTexto] = useState(initValueInput)


    return (
        <div>
            <h1>{texto}</h1>
            <input
                ref={textInput}
                type='text'
                placeholder='ingrese valor...'
                onChange={(e) => setTexto(e.target.value)}></input>
        </div>
    )

}

export { Search }