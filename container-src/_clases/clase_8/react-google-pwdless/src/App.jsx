import { BrowserRouter } from 'react-router'
import './App.css'
import RouterApp from './routing/RouterApp'
import RoutesComponent from './routing/Routes.Component'

function App() {

  return (
    <>
      <BrowserRouter>
        <RouterApp />
        <RoutesComponent />
      </BrowserRouter>
    </>
  )
}

export default App
