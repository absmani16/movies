import { combineReducers } from "redux";
import { reduxForm } from "redux-form";

const reducer = combineReducers({
    form: reduxForm
})

export default reducer;