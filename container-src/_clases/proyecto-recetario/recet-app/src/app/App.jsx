import { BrowserRouter } from "react-router"
import "./App.css"
import Router from "./router"
import NavBar from "../components/NavBar/NavBar"
import PageTitleHandler from "../components/PageTitleHandler"

const App = () => {
  return (
    <BrowserRouter>
      <PageTitleHandler/>
      <NavBar />
      <Router />
    </BrowserRouter>

  )
}

export default App
