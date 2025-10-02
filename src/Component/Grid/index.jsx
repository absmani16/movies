import Loader from "../Loader";
import Layout from "./Layout";

import style from "./style.module.css";

const Grid = ({
    data = [],
    columns = {},
    fetching = false,
    action = false
}) => {

    if (fetching === true && action === "get") {
        return (
            <div className={style.tableLoader}>
                <Loader />
            </div>
        )
    }
    return (
        <Layout
            data={data}
            columns={columns}
        />
    )
}

export default Grid;