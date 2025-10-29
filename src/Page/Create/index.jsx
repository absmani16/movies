import { useState } from "react";
import { useNavigate } from "react-router-dom"

import Section from "../../Component/Section";
import Render from "../../Component/Render";
import Button from "../../Component/Button";
import Title from "../../Component/Title";
import Form from "../Form";

import style from "./style.module.css";

const Create = () => {
    const [formValues, setFormValues] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e, loadOnApiCall) => {
        e.preventDefault();
        loadOnApiCall();
    }

    return (
        <Section>
            <Title>Create Movie</Title>
            <Render
                url="https://movies-cb9d.onrender.com/list"
                method="post"
                loadOnMount={false}
                paramsData={formValues}
                onSuccess={() => navigate("/movies")}
                render={({ loadOnApiCall, fetching }) => (
                    <form
                        name="create"
                        onSubmit={(e) => handleSubmit(e, loadOnApiCall)}
                    >
                        <Form
                            formValues={formValues}
                            onChange={(value) => {
                                setFormValues(prev => {
                                    return {
                                        ...prev,
                                        ...value
                                    }
                                })
                            }}
                        />
                        <div className={style.button}>
                            <Button
                                label="Submit"
                                submit={true}
                                fetching={fetching}
                            />
                        </div>
                    </form>
                )}
            />
        </Section>
    )
}

export default Create