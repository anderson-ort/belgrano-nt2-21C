import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const idElement = "root"
const divContainer = document.getElementById(idElement)

createRoot(divContainer)
.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
