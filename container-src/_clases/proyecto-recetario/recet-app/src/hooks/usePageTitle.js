import { useEffect } from "react"
import { useLocation } from "react-router"
import { TITLES } from "../constants/paginations"


export default function usePageTitle() {
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname
        document.title = TITLES[path] || 'App de Comidas'
    }, [location.pathname])
}