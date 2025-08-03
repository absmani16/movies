import Label from "./Label";
import style from "./style.module.css"

const Form = ({ onChange, formValues }) => {
    const fields = [
        {
            label: "Title",
            type: "text",
            placeholder: "Enter Title"
        },
        {
            label: "Type",
            type: "text",
            placeholder: "Enter Type"
        },
        {
            label: "Director",
            type: "text",
            placeholder: "Enter Director"
        },
        {
            label: "Budget",
            type: "text",
            placeholder: "Enter Budget"
        },
        {
            label: "Location",
            type: "text",
            placeholder: "Enter Location"
        },
        {
            label: "Duration",
            type: "Durations",
            placeholder: "Enter Duration"
        },
        {
            label: "Year",
            type: "number",
            placeholder: "Enter Year"
        }
    ]
    return (
        <div className={style.fields}>
            {
                fields.map(field => {
                    const { label, type, placeholder } = field;
                    const name = label.toLowerCase();
                    return (
                        <div className={style.field} key={`form_label_${name}`}>
                            <Label text={label} id={name} />
                            <input
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                required
                                value={formValues[name]}
                                className={style.input}
                                onChange={(e) => onChange({ [name]: e.target.value })}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Form;