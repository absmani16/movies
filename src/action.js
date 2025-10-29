import { createContext } from "react"

export const Context = createContext();

export const initialState = {
    fetching: false,
    status: false,
    data: false,
    loaded: false,
    action: false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "update_state_fetching":
            return {
                ...state,
                fetching: true,
                loaded: ["put", "delete"].includes(action.meta.method),
                action: false
            }
        case "update_state":
            return {
                ...state,
                fetching: false,
                loaded: true,
                status: action.response.status,
                action: action.response.config.method,
                data: {
                    ...state.data,
                    list: action.response.data
                }
            }
        case "update_state_delete":
            return {
                ...state,
                fetching: false,
                loaded: true,
                status: action.response.status,
                action: action.response.config.method,
                data: {
                    list: state.data.list.filter(val => val.id !== action.response.meta.payload.id)
                }
            }
        case "update_state_reset":
            return {
                ...state,
                fetching: false,
                status: false,
                data: false,
                loaded: false,
                action: false
            }
        default:
            return state;
    }
}