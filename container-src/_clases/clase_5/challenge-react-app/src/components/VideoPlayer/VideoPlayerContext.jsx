import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

const TheaterModeContext = createContext()
const CLASS_NAME = "blurred-background"


const TheaterModeProvider = ({ children }) => {
    const [theaterMode, setTheaterMode] = useState(false);
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        root.classList.toggle(CLASS_NAME, theaterMode);
    }, [theaterMode]);

    return (
        <TheaterModeContext.Provider value={{ theaterMode, setTheaterMode, rootRef }}>
            {children}
        </TheaterModeContext.Provider>
    );
};

const useTheaterMode = () => (useContext(TheaterModeContext))

export { useTheaterMode, TheaterModeProvider }