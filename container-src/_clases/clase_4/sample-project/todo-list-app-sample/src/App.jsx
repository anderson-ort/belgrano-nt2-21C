import './App.css'
import TodoComponent from './components/Todos/TodoComponent'
import ManagerStore from './components/ManagerStorage/ManagerStore'
import { TodosProvider } from './contexts/TodosProvider'


function App() {

  return (
    <TodosProvider>
      <div className='leftSide'>
        <ManagerStore />
      </div>
      <div className='mainSide'>
        <TodoComponent />
      </div>
    </TodosProvider >
  )
}

export default App
