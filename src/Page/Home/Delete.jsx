import Render from "../../Component/Render";
import Loader from "../../Component/Loader";

import style from "./style.module.css";

const Delete = ({ item, onUpdate, list }) => {
    return (
        <Render
            url={`https://movies-cb9d.onrender.com/list/${item.id}`}
            method="delete"
            loadOnMount={false}
            onSuccess={() => {
                const currentItem = (list || []).filter(val => val.id !== item.id);
                onUpdate({ list: currentItem })
            }}
            render={({ loadOnMount, fetching }) => (
                <div className={`${style.delete}${fetching === true ? " " + style.loading : ""}`}>
                    {
                        fetching === true && (
                            <Loader
                                text={false}
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
            )}
        />
    )
}

export default Delete;