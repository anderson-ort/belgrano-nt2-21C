import { useEffect, useReducer, useRef } from "react"
import { debounce } from "../utils/debounce"

const initialStateSearch = {
    input: "",
    search: "",
}

const reducerOptions = {
    INPUT: "SET_INPUT",
    SEARCH: "SET_SEARCH"
}
Object.freeze(reducerOptions)

const reducer = (state, action) => {
    switch (action.type) {
        case reducerOptions.INPUT:
            return { ...state, input: action.payload }
        case reducerOptions.SEARCH:
            return { ...state, search: action.payload }
        default:
            return state
    }
}

const useSearch = (delay = 300) => {
    const [state, dispatch] = useReducer(reducer, initialStateSearch)
    const debounced = useRef(null)

    // ✅ se define una sola vez
    useEffect(() => {
        debounced.current = debounce((val) => {
            console.log("🔥 Debounced search triggered:", val);
            dispatch({ type: reducerOptions.SEARCH, payload: val })
        }, delay)

        // ❌ no es necesario cleanup acá si usás un debounce clásico
    }, [delay])

    const handleChange = (val) => {
        dispatch({ type: reducerOptions.INPUT, payload: val })
        if (debounced.current) {
            debounced.current(val)
        }
    }
    const resetSearch = () => {
        dispatch({ type: reducerOptions.INPUT, payload: "" })
        dispatch({ type: reducerOptions.SEARCH, payload: "" })
    }

    return {
        input: state.input,
        search: state.search,
        handleChange,
        resetSearch
    }
}

export { useSearch }
