import { Paper } from '@mui/material';
import Chart from 'react-apexcharts';

// eslint-disable-next-line react/prop-types
const DynamicGraph = ({ options, series, type, height }) => {

    return (
        <Paper variant='elevation' sx={{ p: '30px', height: `${height}px` }} >
            <Chart
                options={options}
                series={series}
                type={type}

                height={height}
            />
        </Paper>
    )
}

export default DynamicGraph
