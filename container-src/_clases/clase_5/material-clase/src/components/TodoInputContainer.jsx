import React, { useRef, useState } from 'react'
import { TodoValidator } from '../types/ToDo.Type'
import { TodoInputPresentation } from './TodoInputPresentation'


const keys = Object.freeze({
  ENTER: 'Enter'
})

const TodoInputContainer = ({ onAdd }) => {

  const [text, setText] = useState("")
  const inputRef = useRef(null)

  const handleAdd = () => {
    if (!text.trim()) return

    const newTodo = {
      id: new Date().getUTCDate(),
      text,
      completed: false
    }

    if (TodoValidator.isValid(newTodo)) {

      console.log('✅ Todo válido')
      onAdd(newTodo)
      setText("")
      inputRef.current?.focus()

    } else {
      console.log('❌ No es un Todo válido')
    }




  }
  const handleKeyDown = (e) => { if (e.key === keys.ENTER) { handleAdd() } }


  return (
    <TodoInputPresentation
      inputRef={inputRef}
      text={text}
      onAdd={handleAdd}
      onChange={(e) => { setText(e.target.value) }}
      onKeyDown={handleKeyDown}
    />
  )
}

export default TodoInputContainer