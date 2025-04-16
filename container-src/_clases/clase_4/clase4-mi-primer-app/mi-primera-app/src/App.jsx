import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// COMPONENTES
import { Presentacion } from './components/Presentacion/Presentacion'
import { ListaDePresentacionesContainer } from './components/ListaPresentaciones/ListaDePresentacionesContainer'
import { Search } from './components/Search/Search'

let initValue = 10

const increment = count => count + 10

const App = () => {

  const [count, setCount] = useState(initValue) // hook de manejo de estado


  if (count >= 200) return <Presentacion nombre="Lola" />

  return (
    <>
      <Search/ >
      {(count < 100) ? <Presentacion /> : <div>Supero la cantidad</div>}

      <h1>Hola mundo desde ORT : {count}</h1>

      <div className="card">
        <button onClick={() => setCount(increment)}>
          Hace click para cambiar
        </button>

      </div>

      <hr />
      <div className='ContainerPresentaciones'>
        <ListaDePresentacionesContainer />
      </div>

    </> //fragment
  )

}


export default App
