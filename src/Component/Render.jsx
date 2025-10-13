import { useEffect, useRef, useState } from "react";
import useFetch from "./useFetch";

const Render = ({
    url = "",
    method = "get",
    loadOnMount: disabled = true,
    paramsData = false,
    render = () => { },
    onSuccess = () => { }
}) => {
    const timer = useRef(null);
    const [hasApiCall, setHasApiCall] = useState(disabled);
    const { data, fetching, status, action } = useFetch(url, method, !hasApiCall, paramsData);

    useEffect(() => {
        if (disabled !== hasApiCall) {
            setHasApiCall(loadOnApiCall)
        }
    }, [disabled, hasApiCall, setHasApiCall])

    const loadOnApiCall = () => {
        setHasApiCall(true);
    }

    useEffect(() => {
        if ([200, 201].includes(status) && ["put", "post", "delete"].includes(action) && action === method) {
            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                onSuccess({ data });
            }, 300)
        }
    }, [onSuccess, data, status, action, method])

    return (
        render({ fetching, action, data, loadOnApiCall })
    )
}

export default Render;