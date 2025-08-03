import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Delete from "./Delete";
import Grid from "../../Component/Grid";
import Loader from "../../Component/Loader";
import Button from "../../Component/Button";
import Section from "../../Component/Section";
import useFetch from "../../Component/useFetch";
import Title from "../../Component/Title"

import style from "./style.module.css";

const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const { data: responseData, fetching } = useFetch("http://localhost:3001/list");

    useEffect(() => {
        if (fetching === false) {
            setData(responseData);
        }
    }, [responseData, fetching])

    return (
        <div className={style.container}>
            <Section>
                <Title>List of Movies</Title>
                <Button
                    label="Add"
                    icon="fa-solid fa-list-ul"
                    className={style.addBtn}
                    onClick={() => navigate("/home/create")}
                />
                {
                    fetching === true && (
                        <div className={style.tableLoader}>
                            <Loader />
                        </div>
                    )
                }
                {
                    fetching === false && (
                        <Grid
                            data={data.list}
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
                                            <button title="Edit" onClick={() => navigate(`/home/${item.id}`)}>
                                                <i className="fa-solid fa-pencil"></i>
                                            </button>
                                            <Delete
                                                item={item}
                                                list={data.list}
                                                onUpdate={(value) => setData(value)}
                                            />
                                        </div>
                                    )
                                }
                            }}
                        />
                    )
                }
            </Section>
        </div>
    )
}

export default Home