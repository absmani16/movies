import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    const [formValues, setFormValues] = useState({})
    const { data, fetching } = useFetch(`https://movies-cb9d.onrender.com/list/${id}`);

    const list = useMemo(() => data.list || {}, [data])

    useEffect(() => {
        if (fetching === false && list.id) {
            setFormValues(list);
        }
    }, [list, fetching])

    const handleSubmit = (e, loadOnMount) => {
        e.preventDefault();
        loadOnMount()
    }

    return (
        <Section>
            <Title>Edit - {list.title || "Loading..."}</Title>
            <div className={style.edit}>
                {
                    fetching === true && (
                        <div className={style.loader}>
                            <Loader />
                        </div>
                    )
                }
                {
                    fetching === false && formValues.id && (
                        <Render
                            url={`https://movies-cb9d.onrender.com/list/${list.id}`}
                            method="put"
                            loadOnMount={false}
                            paramsData={formValues}
                            onSuccess={() => navigate("/")}
                            render={({ loadOnMount, fetching }) => (
                                <form
                                    name="edit"
                                    onSubmit={(e) => handleSubmit(e, loadOnMount)}
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
                    )
                }
            </div>
        </Section>
    )
}

export default Edit;