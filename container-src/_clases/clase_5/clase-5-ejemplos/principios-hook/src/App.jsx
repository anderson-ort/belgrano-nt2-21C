import { useState } from 'react';
import './App.css'
import { useUsuarios } from './hooks/useUsuarios';


// estetica y styles del componente

const initValue =
  [{
    id: "123",
    username: "Andor"
  }]


function App() {

  const { usuarios, loading, peticionDeUsuarios } = useUsuarios()
  const [seleccion, setSeleccion] = useState(null)




  const handlerClick = (usuario) => {
    setSeleccion(usuario)
  }

  const handlerReset = () => { setSeleccion(null) }




  return (
    // parte de inyeccion de etiquetas html
    <>
      <div>
        <div>
          {loading && <p> estan cargando los usuarios</p>}

          {!loading && usuarios.map(
            usuario => (<button
              onClick={() => handlerClick(usuario)}
              key={usuario.id}
            >{usuario.username}</button>)
          )}
          <button onClick={handlerReset}>Reset</button>
          <button onClick={peticionDeUsuarios}>Recarga de usuarios</button>
        </div>
        <hr />
        <div>
          <p>Hola Mundo</p>
          <p>{seleccion && seleccion.username}</p>
        </div>
      </div>
    </>
  )
}

export default App
