import Render from "../../Component/Render";
import Loader from "../../Component/Loader";

import style from "./style.module.css";

const Delete = ({ item, onUpdate, list }) => {
    return (
        <Render
            url={`http://localhost:3001/list/${item.id}`}
            method="delete"
            loadOnMount={false}
            onSuccess={({ data }) => {
                const remmovedId = data.list.id
                const currentItem = (list || []).filter(item => item.id !== remmovedId);
                onUpdate({ list: currentItem })
            }}
            render={({ loadOnMount, fetching }) => {
                return (
                    <div className={`${style.delete}${fetching === true ? " " + style.loading : ""}`}>
                        {
                            fetching === true && (
                                <Loader
                                    text={false}
                                    size="small"
                                    className={style.loader}
                                />
                            )
                        }
                        {
                            fetching === false && (
                                <button
                                    title="Delete"
                                    onClick={() => {
                                        alert(`Are you sure, you want to delete the ${item.title} movie delete?`)
                                        loadOnMount()
                                    }}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            )
                        }
                    </div>
                )
            }}
        />
    )
}

export default Delete