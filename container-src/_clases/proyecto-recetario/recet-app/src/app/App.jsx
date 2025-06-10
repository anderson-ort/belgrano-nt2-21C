import { BrowserRouter } from "react-router"
import "./App.css"
import Router from "./Router"
import NavBar from "../components/NavBar/NavBar"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
