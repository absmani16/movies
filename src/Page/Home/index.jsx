import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Delete from "./Delete";
import Grid from "../../Component/Grid";
import Title from "../../Component/Title";
import Button from "../../Component/Button";
import Section from "../../Component/Section";
import useFetch from "../../Component/useFetch";
import { Context } from "../../action";

import style from "./style.module.css";

const Home = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(Context);
    const { data, fetching, action } = useFetch("https://movies-cb9d.onrender.com/list");

    useEffect(() => {
        return () => {
            dispatch({ type: "update_state_reset" });
        }
    }, [dispatch]);

    return (
        <div className={style.container}>
            <Section>
                <Title align="centre">List of Movies</Title>
                <Button
                    label="Create"
                    icon="fa-solid fa-list-ul"
                    className={style.addBtn}
                    onClick={() => navigate("create")}
                />
                <Grid
                    data={data.list}
                    fetching={fetching}
                    action={action}
                    columns={{
                        title: "Title",
                        type: "Type",
                        director: "Director",
                        budget: "Budget",
                        location: "Location",
                        duration: "Duration",
                        year: "Year",
                        actions: {
                            columnTitle: "Actions",
                            render: ({ item }) => (
                                <div className={style.actions}>
                                    <button title="Edit" onClick={() => navigate(item.id)}>
                                        <i className="fa-solid fa-pencil"></i>
                                    </button>
                                    <Delete item={item} />
                                </div>
                            )
                        }
                    }}
                />
            </Section>
        </div>
    )
}

export default Home