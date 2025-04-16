import React from 'react'
import { ListaDePresentacionesPresenter } from './ListaDePresentacionesPresenter'
const users = [
    {
        "nombre": "Ana Pérez",
        "edad": 32,
        "email": "ana.perez@ejemplo.com"
    },
    {
        "nombre": "Carlos López",
        "edad": 25,
        "email": "carlos.lopez@dominio.net"
    },
    {
        "nombre": "Sofía Gómez",
        "edad": 45,
        "email": "sofia.gomez@mail.org"
    },
    {
        "nombre": "Martín Rodríguez",
        "edad": 19,
        "email": "martin.rodriguez@provider.co"
    },
    {
        "nombre": "Laura Vargas",
        "edad": 28,
        "email": "laura.vargas@servicio.info"
    }
]


const ListaDePresentacionesContainer = () => {

    let cleanedUser = users.map(
        u => ({
            label: u.nombre.toUpperCase().charAt(0),
            name: u.nombre.toLowerCase(),
            edad: u.edad,
            email: u.email
        })
    )


    //logica
    return cleanedUser.map(
        (user, index) => (<
            ListaDePresentacionesPresenter
            key={index}
            label={user.label}
            nombre={user.nombre}
            edad={user.edad}
            email={user.email}
        />)
    )

}

export { ListaDePresentacionesContainer }