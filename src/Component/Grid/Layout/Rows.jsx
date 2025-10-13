import React from "react";

import style from "../style.module.css";

const Rows = ({ item, columns }) => {
    const entries = Object.entries(columns);
    return (
        <tr className={style.tr}>
            {
                entries.map(([key, values]) => (
                    <td className={style.td} key={`table_rows_${key}_${item.id}`}>
                        {
                            key === "actions" && (
                                values.render({ item })
                            )
                        }
                        {
                            key !== "actions" && (
                                <span>{item[key]}</span>
                            )
                        }
                    </td>
                ))
            }
        </tr>
    )
}

export default Rows