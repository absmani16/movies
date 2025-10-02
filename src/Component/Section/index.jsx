
import style from "./style.module.css"

const Section = ({ children, className = false }) => {
    return (
        <section className={`${style.section} ${className !== false ? className : ""}`}>
            {children}
        </section>
    )
}

export default Section;