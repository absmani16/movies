import Layout from "./Layout";

const Grid = ({
    data = [],
    columns = {}
}) => {
    return (
        <Layout
            data={data}
            columns={columns}
        />
    )
}

export default Grid;