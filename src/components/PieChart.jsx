const PieChart = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'blue',

        top: 0,
        right: 0,
        order: 1
      }}
    >
      <div style={{ width: '300px', border: '2px solid brown', height: '500px' }}>
        Pie
      </div>
    </div>
  );
};

export default PieChart;
