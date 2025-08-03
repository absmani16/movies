import { reduxForm } from "redux-form"
import Form from "../Form"

const Add = () => {
    return (
        <form>
            <Form />
        </form>
    )
}

export default reduxForm({
    form: "create"
})(Add)