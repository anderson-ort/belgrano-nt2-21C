import React, { useEffect, useState } from 'react'


const initValue = (key, initialValue) => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
}


export const usePersist = (key, initialValue) => {

    const [value, setValue] = useState(() => initValue(key, initialValue))
    useEffect(

        () => {
            localStorage.setItem(key, JSON.stringify(value))
        }
        , [key, value])

    return [value, setValue];
}
