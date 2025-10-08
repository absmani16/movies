import Loader from "../Loader";
import Layout from "./Layout";

import style from "./style.module.css";

const Grid = ({
    data = [],
    columns = {},
    fetching = false,
    loaded = false
}) => {

    if (fetching === true && loaded === false) {
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