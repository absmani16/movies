import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Render = ({
    url = "",
    method = "get",
    loadOnMount: disabled = true,
    paramsData = false,
    render = () => { },
    onSuccess = () => { }
}) => {
    const [hasApiCall, setHasApiCall] = useState(disabled)
    const { data, fetching, status } = useFetch(url, method, !hasApiCall, paramsData);

    useEffect(() => {
        if (disabled !== hasApiCall) {
            setHasApiCall(loadOnMount)
        }
    }, [disabled, hasApiCall])

    const loadOnMount = () => {
        setHasApiCall(true);
    }

    useEffect(() => {
        if ([200, 201].includes(status)) {
            onSuccess({ data })
        }
    }, [status, onSuccess, data])

    return (
        render({ fetching, data, loadOnMount })
    )
}

export default Render;