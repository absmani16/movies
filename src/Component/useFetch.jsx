import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

async function api(method, url, paramsData) {
    try {
        const response = await axios[method](url, paramsData);
        return response
    }
    catch (error) {
        console.log(error);
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
    const [response, setResponse] = useState({
        data: {},
        fetching: false,
        status: false
    });

    useEffect(() => {
        async function fetchData() {
            setResponse((prev) => {
                return {
                    ...prev,
                    fetching: true
                }
            })
            await api(method, url, paramsData)
                .then((response) => {
                    setResponse({
                        fetching: false,
                        status: response.status,
                        data: {
                            list: response.data
                        }
                    })
                })
                .catch(() => {
                    setResponse(prev => {
                        return {
                            ...prev,
                            fetching: false
                        }
                    })
                })
        }
        if (disabled === false) {
            fetchData();
        }
    }, [paramsData, url, disabled, method])

    return response;
}