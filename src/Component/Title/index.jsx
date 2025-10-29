import style from "./style.module.css";

export default function Title({ tag = "h1", children, align = false, className = false }) {
    const Tag = tag
    return (
        <Tag className={`${style.title}${align !== false ? " " + style[align] : ""}${className !== false ? " " + className : ""}`}>
            {children}
        </Tag>
    )
}