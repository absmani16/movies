import Render from "../../Component/Render";

import style from "./style.module.css";

const Delete = ({ item }) => {
    return (
        <Render
            url={`https://movies-cb9d.onrender.com/list/${item.id}`}
            method="delete"
            loadOnMount={false}
            paramsData={item}
            render={({ loadOnApiCall }) => (
                <div className={style.delete}>
                    <button
                        title="Delete"
                        onClick={() => {
                            const hasApiCall = window.confirm(`Are you sure, you want to delete the ${item.title} movie delete?`)
                            if (hasApiCall === true) {
                                loadOnApiCall();
                            }
                        }}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            )}
        />
    )
}

export default Delete;