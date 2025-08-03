import style from "./style.module.css";

const Label = ({ text = "", id = "" }) => {
    return (
        <label htmlFor={id} className={style.label}>
            <b>{text} : </b>
        </label>
    )
}

export default Label