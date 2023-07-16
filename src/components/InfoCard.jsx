import { Paper, Divider } from "@mui/material"

// eslint-disable-next-line react/prop-types
const InfoCard = ({ data, height }) => {
    return (
        <Paper sx={{ height: `${height}px` }}>
            <h1 style={{ padding: '10px 20px' }}>{data.title}</h1>
            <Divider />
            <div style={{ padding: '10px 20px' }}>
                <h3>${data.amount}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ color: 'green' }}>({data.percentage * 100}%)</p>
                    <strong>{data.value}</strong>
                </div>
            </div>
        </Paper>
    )
}

export default InfoCard
