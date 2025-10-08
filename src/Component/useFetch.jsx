import { useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../action";

async function api(method, url, paramsData) {
    try {
        const response = await axios[method](url, paramsData);
        return response
    }
    catch (error) {
        toast(error.message, { type: "error", fontSzie: "10px" });
        console.log(error.message);
    }
}

export default function useFetch(
    url = "",
    method = "get",
    disabled = false,
    paramsData = false
) {
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        async function fetchData() {
            dispatch({ type: "update_state_fetching", meta: { method } });
            await api(method, url, paramsData)
                .then(response => {
                    if (response) {
                        const type = method === "delete" ? `update_state_${method}` : "update_state";
                        dispatch({ type, response: { ...response, meta: { method, payload: paramsData } } });
                    }
                });
        }
        if (disabled === false) {
            fetchData();
        }
    }, [paramsData, url, disabled, method, dispatch])

    return state;
}