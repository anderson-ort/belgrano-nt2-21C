import { actions } from "../constants/actions";

export const todoReducer = (state, action) => {

    switch (action.type) {
        case actions.ADD:
            return [...state, action.payload]

        case actions.TOGGLE:
            return state.map(
                todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            )
        case actions.SET:
            return action.payload

        case actions.DELETE:
            return state.filter(
                todo => todo.id !== action.payload
            )
        default:
            return state
    }

}