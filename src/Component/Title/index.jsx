import style from "./style.module.css";

export default function Title({ tag = "h1", children, className = false }) {
    const Tag = tag
    return (
        <Tag className={`${style.title}${className !== false ? " " + className : ""}`}>
            {children}
        </Tag>
    )
}