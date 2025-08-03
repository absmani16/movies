import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { reduxForm } from "redux-form";

import useFetch from "../../Component/useFetch";
import Section from "../../Component/Section";
import Loader from "../../Component/Loader";
import Button from "../../Component/Button";
import Title from "../../Component/Title"
import Form from "../Form";

import style from "./style.module.css"

const Edit = (props) => {
    const { initialize, handleSubmit } = props
    const { id } = useParams();
    const { data, fetching } = useFetch(`http://localhost:3001/list/${id}`)

    const memoData = useMemo(() => {
        return data.list
    },[data]) 

    useEffect(() => {
        if (fetching === false && memoData) {
            initialize(memoData);
        }
        console.log(data.list, props);
    }, [fetching, memoData, initialize])

    const onSubmit = (value) => {
        console.log(value);
    }

    return (
        <Section>
            <Title>Edit - {data?.list?.title} movie</Title>
            <div className={style.edit}>
                {
                    fetching === true && (
                        <div className={style.loader}>
                            <Loader />
                        </div>
                    )
                }
                {
                    fetching === false && (
                        <form name="edit" onSubmit={handleSubmit(onSubmit)}>
                            <Form />
                            <div className={style.button}>
                                <Button
                                    submit={true}
                                    label="Submit"
                                />
                            </div>
                        </form>
                    )
                }
            </div>
        </Section>

    )
}

export default reduxForm({
    form: "edit"
})(Edit);