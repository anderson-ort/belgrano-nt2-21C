import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { TheaterModeProvider } from './components/VideoPlayer/VideoPlayerContext.jsx'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>

  <TheaterModeProvider>
    <App />
  </TheaterModeProvider>
)
