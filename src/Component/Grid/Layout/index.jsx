import Header from "./Header";
import Rows from "./Rows";

import style from "../style.module.css";

const Layout = ({ data, columns }) => {
    return (
        <table className={style.table}>
            <thead>
                <Header columns={columns} />
            </thead>
            <tbody>
                {
                    data.length > 0 && data.map((item) => (
                        <Rows
                            item={item}
                            columns={columns}
                            key={`table_rows_item_${item.id}`}
                        />
                    ))
                }
                {
                    data.length === 0 && (
                        <tr className={style.noFound}>
                            <td>No Found Movies Result</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Layout;