import React from 'react'
import "./SearchBar.css"

const SearchBar = ({ value, onChange }) => {
    return (

        <div className="search-bar">
            <input
                type="text"
                placeholder='Search...'
                value={value}
                onChange={e => onChange(e.target.value)}
            />
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM10 14a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
        </div >

    )
}

export default SearchBar