import { createContext } from "react"

export const Context = createContext();

export const initialState = {
    fetching: false,
    status: false,
    data: false,
    loaded: false,
    action: false
}

export const reducer = (initialState, action) => {
    switch (action.type) {
        case "update_state_fetching":
            return {
                ...initialState,
                fetching: true,
                loaded: false,
                action: action.meta.method
            }
        case "update_state":
            return {
                ...initialState,
                fetching: false,
                loaded: true,
                status: action.response.status,
                action: action.response.config.method,
                data: {
                    list: action.response.data
                }
            }
        case "update_state_delete":
            return {
                ...initialState,
                fetching: false,
                loaded: true,
                status: action.response.status,
                action: action.response.config.method,
                data: {
                    list: initialState.data.list.filter(val => val.id !== action.response.meta.payload.id)
                }
            }
        case "update_state_reset":
            return {
                ...initialState,
                fetching: false,
                status: false,
                data: false,
                loaded: false,
                action: false
            }
        default:
            return initialState;
    }
}