import { Paper, Divider } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const InfoCard = ({ API, height }) => {

    const [data, setData] = useState({})
    const [counter, setCounter] = useState(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
        const response = await axios.get(API);
        setData(response.data)
        console.log("Response", response.data)
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [API, counter])


    return (
        <Paper sx={{ height: `${height}px` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 20px' }}>
                <h2  >A Joke for You</h2>
                <p style={{ color: 'green', cursor: 'pointer' }} onClick={() => setCounter(counter + 1)}>Refresh</p>
            </div>
            <Divider />
            <div style={{ padding: '10px 20px' }}>
                <h3>{data?.setup}</h3>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{data?.punchline}</strong>
                </div>
            </div>
        </Paper>
    )
}

export default InfoCard
