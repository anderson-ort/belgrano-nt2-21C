import React from 'react'
import "./Presentaciones.css"


const ListaDePresentacionesPresenter = ({ label, nombre, edad, email }) => {
  return (
    <div className='Presentacion'>
      <h1>{label}</h1>
      <p>Mi nombre es {nombre}. Edad: {edad}</p>
      <p>email: {email}</p>
    </div>
  )
}

export { ListaDePresentacionesPresenter }