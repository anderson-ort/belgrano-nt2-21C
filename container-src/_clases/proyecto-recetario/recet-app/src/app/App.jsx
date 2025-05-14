import { BrowserRouter } from "react-router"
import "./App.css"
import Router from "./router"
import NavBar from "../components/NavBar"

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
