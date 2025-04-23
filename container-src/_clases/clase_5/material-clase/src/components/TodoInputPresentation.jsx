export const TodoInputPresentation = ({ inputRef, text, onChange, onKeyDown, onAdd }) => {
    return (
        <div>
            <input
                ref={inputRef}
                value={text}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="... Nueva tarea"
            />
            <button onClick={onAdd}>Agregar</button>
        </div>
    )
}
