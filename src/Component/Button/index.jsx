import style from "./style.module.css";

const Button = ({ onClick = () => { }, label = "", icon = false, disabled = false, className = false, submit = false }) => {
    return (
        <div className={className !== false ? className : ""}>
            {
                disabled !== false && (
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
                disabled === false && submit === false && (
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
                submit === true && (
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