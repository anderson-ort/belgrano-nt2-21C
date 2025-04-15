

import { useEffect, useState } from 'react'
import './App.css'
import { ThemeToggleContainer } from './components/ThemeToggle/ThemeToggle.Container'


const THEME_KEY = 'preferred-theme'

const MESSAGE = {
  LIGHT: 'Hello World 👋',
  DARK: 'Goodbye World 💤',
}


function App() {

  const [msg, setMsg] = useState('Goodbye World 💤')

  useEffect(() => {
    const updateMessage = () => {
      const theme = localStorage.getItem(THEME_KEY) || 'dark'
      setMsg(MESSAGE[theme.toUpperCase()])
    }

    updateMessage()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <ThemeToggleContainer />
      <h1> {msg} </h1>
    </div>
  )
}

export default App
