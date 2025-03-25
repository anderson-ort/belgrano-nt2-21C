import React from 'react'
import { Button } from '../ui/button'
import { useTodosContext } from '../../hooks/useTodosContext'


const ManagerStore = () => {
    const { handleRefresh, handleClearLocalStorage, handleGetFromApi } = useTodosContext()

    return (
        <>
            <Button onClick={handleRefresh}> Refresh data</Button>
            <Button onClick={handleClearLocalStorage} className="mt-4 p-2 bg-blue-500 text-white"> Clear LocalStorage</Button>
            <Button onClick={handleGetFromApi} className="mt-4 p-2 bg-blue-500 text-white"> Get From API</Button>
        </>
    )
}

export default ManagerStore