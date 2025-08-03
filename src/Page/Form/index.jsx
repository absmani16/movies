import { Field } from "redux-form";
import { required } from "redux-form-validators";

import style from "./style.module.css"

import Label from "./Label";

const Form = () => {
    return (
        <>
            <div>
                <Label text="Title" id="title" />
                <Field
                    name="title"
                    component={({ input, meta }) => {
                        console.log(input);
                        return (
                            <>
                                <input {...input} className={style.input} />
                                {
                                    meta.error && (
                                        <span>{meta.error}</span>
                                    )
                                }
                            </>
                        )
                    }}
                    validate={[required()]}
                />
            </div>
            <div className={style.field}>
                <Label text="Type" />
                <Field
                    name="type"
                    component="input"
                    validate={[required()]}
                    className={style.input}
                />
            </div>
            <div className={style.field}>
                <Label text="Director" />
                <Field
                    name="director"
                    component="input"
                    validate={[required()]}
                    className={style.input}
                />
            </div>
            <div className={style.field}>
                <Label text="Budget" />
                <Field
                    name="budget"
                    component="input"
                    validate={[required()]}
                    className={style.input}
                />
            </div>
            <div className={style.field}>
                <Label text="Location" />
                <Field
                    name="location"
                    component="input"
                    validate={[required()]}
                    className={style.input}
                />
            </div>
            <div className={style.field}>
                <Label text="Duration" />
                <Field
                    name="duration"
                    component="input"
                    validate={[required()]}
                    className={style.input}
                />
            </div>
            <div className={style.field}>
                <Label text="Year" />
                <Field
                    name="year"
                    component="input"
                    validate={[required()]}
                    className={style.input}
                />
            </div>
        </>
    )
}

export default Form;