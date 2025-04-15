import { useEffect, useState } from "react"
import { ThemeToggleView } from "./ThemeToggle.View"

const THEME_KEY = 'preferred-theme'

const OPTIONS = {
    LIGHT: 'light',
    DARK: 'dark',
}



const initValue = (key, initialValue) => {
    const item = localStorage.getItem(key)
    return item ? item : initialValue
}



export const ThemeToggleContainer = () => {

    console.log("Componente renderizado");


    const getInitstate = initValue(THEME_KEY, OPTIONS.DARK)

    const [theme, setTheme] = useState(getInitstate)


    useEffect(
        () => {
            document.documentElement.setAttribute('data-theme', theme)
            localStorage.setItem(THEME_KEY, theme)
        }
        , [theme])

    const toggleTheme = () => setTheme(
        prev => (

            prev === OPTIONS.DARK ? OPTIONS.LIGHT : OPTIONS.DARK
        )
    )

    return <ThemeToggleView
        theme={theme}
        toggleTheme={toggleTheme}
        OPTIONS={OPTIONS} />
}
