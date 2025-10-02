import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Context } from "../../action";
import useFetch from "../../Component/useFetch";
import Section from "../../Component/Section";
import Loader from "../../Component/Loader";
import Button from "../../Component/Button";
import Render from "../../Component/Render";
import Title from "../../Component/Title"
import Form from "../Form";

import style from "./style.module.css";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({});
    const { dispatch } = useContext(Context);
    const { data, fetching, status, action } = useFetch(`https://movies-cb9d.onrender.com/list/${id}`);

    useEffect(() => {
        return () => {
            dispatch({ type: "update_state_reset" });
        }
    }, [dispatch])

    useEffect(() => {
        if (fetching === false && status === 200) {
            setFormValues(data.list);
        }
    }, [data, fetching, status])

    const handleSubmit = (e, loadOnApiCall) => {
        e.preventDefault();
        loadOnApiCall()
    }

    if (fetching === true && action === "get") {
        return (
            <Section>
                <Title>Edit - Loading...</Title>
                <div className={style.loader}>
                    <Loader />
                </div>
            </Section>
        )
    }
    return (
        <Section>
            <Title>Edit - {formValues.title || "Loading..."}</Title>
            <Render
                url={`https://movies-cb9d.onrender.com/list/${formValues.id}`}
                method="put"
                loadOnMount={false}
                paramsData={formValues}
                onSuccess={() => navigate("/movies")}
                render={({ loadOnApiCall, fetching }) => (
                    <div className={style.edit}>
                        <form
                            name="edit"
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
                    </div>
                )}
            />
        </Section>
    )
}

export default Edit;