import style from "../style.module.css";

const Header = ({ columns }) => {
    const titles = Object.values(columns);
    return (
        <tr className={style.tr}>
            {
                titles.map(item => {
                    const title = item.columnTitle || item;
                    return (
                        <th className={style.th} key={`table_header_${title}`}>{title}</th>
                    )
                })
            }
        </tr>
    )
}

export default Header