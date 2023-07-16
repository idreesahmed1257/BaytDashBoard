
const LineChart = () => {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                position: 'fixed',
                bottom: 0,
                right: 0,
                order: 2
            }}
        >
            <div style={{ width: '300px', border: '5px solid blue', height: '400px' }}>line</div>
        </div>
    );
};

export default LineChart;
