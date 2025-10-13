import { memo } from "react";
import { toast } from "react-toastify";
import Render from "../../Component/Render";

import style from "./style.module.css";

const Delete = ({ item, select, onSelect }) => {
    return (
        <Render
            url={`https://movies-cb9d.onrender.com/list/${item.id}`}
            method="delete"
            loadOnMount={false}
            paramsData={item}
            onSuccess={() => {
                if (select !== false) {
                    toast(`${select.title} ${select.type} detail was deleted successfully`, { type: "success", fontSzie: "10px" });
                    onSelect(false);
                }
            }}
            render={({ loadOnApiCall }) => (
                <div className={style.delete}>
                    <button
                        title="Delete"
                        onClick={() => {
                            const hasApiCall = window.confirm(`Are you sure, you want to delete the ${item.title} movie delete?`)
                            if (hasApiCall === true) {
                                onSelect(item);
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

export default memo(Delete);