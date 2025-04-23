import React, { useEffect, useState } from 'react'

const usersAPIURI = "https://jsonplaceholder.typicode.com/users"



export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)

    const peticionDeUsuarios = () => {
        setLoading(true)
        setUsuarios([])
        fetch(usersAPIURI)
            .then(res => res.json())
            .then(usuarios => {
                setTimeout(() => {
                    setUsuarios(usuarios)
                    setLoading(false)
                }, 3_000)
            }
            )
            .catch(e => console.log({ error: e.message })
            )
    }


    useEffect(() => { peticionDeUsuarios() }, [])

    return {
        usuarios,
        loading,
        peticionDeUsuarios
    }
}
