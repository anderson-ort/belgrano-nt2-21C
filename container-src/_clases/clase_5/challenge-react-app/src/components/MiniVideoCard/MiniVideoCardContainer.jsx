import React, { useState } from 'react'
import MiniVideoCard from './MiniVideoCard'

const MiniVideoCardContainer = ({ data, onSelect }) => {
    const [showOptions, setShowOptions] = useState(false)

    const toggleOptions = (e) => {
        e.stopPropagation()
        setShowOptions(!showOptions)
    }

    return (
        <MiniVideoCard
            data={data}
            showOptions={showOptions}
            toggleOptions={toggleOptions}
            onSelect={onSelect}
        />
    )
}

export default MiniVideoCardContainer