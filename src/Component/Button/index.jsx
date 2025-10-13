import Loader from "../Loader";
import style from "./style.module.css";

const Button = ({ onClick = () => { }, fetching = false, label = "", icon = false, disabled = false, className = false, submit = false }) => {
    return (
        <div className={className !== false ? className : ""}>
            {
                fetching === true && (
                    <div className={style.button}>
                        <Loader
                            text={false}
                            className={style.loader}
                        />
                    </div>
                )
            }
            {
                disabled !== false && fetching === false && (
                    <div className={`${style.button} ${style.disabled}`}>
                        {
                            icon !== false && (
                                <span>
                                    <i className={icon}></i>
                                </span>
                            )
                        }
                        <span>{label}</span>
                    </div>
                )
            }
            {
                disabled === false && submit === false && fetching === false && (
                    <button onClick={onClick} className={style.button}>
                        {
                            icon !== false && (
                                <span>
                                    <i className={icon}></i>
                                </span>
                            )
                        }
                        <span>{label}</span>
                    </button>
                )
            }
            {
                submit === true && fetching === false && (
                    <button type="submit" className={style.button}>
                        {
                            icon !== false && (
                                <span>
                                    <i className={icon}></i>
                                </span>
                            )
                        }
                        <span>{label}</span>
                    </button>
                )
            }
        </div>
    )
}

export default Button;