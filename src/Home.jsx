import { Box, Grid } from '@mui/material'
import Navbar from './components/Navbar'
import SearchBar from './components/searchBar'
import { initFile } from './components/init'
import DynamicGraph from './components/DynamicGraph'
// import LineChart from './components/LineChart'
import { useTheme } from 'styled-components';
import InfoCard from './components/InfoCard'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'

const Home = () => {
  const theme = useTheme()

  const sortedComponents = initFile.widgets.sort((a, b) => {
    return a.priority - b.priority; // Sort by priority
  });

  return (
    <div>

      <Navbar />
      <Box sx={{ px: '20px', paddingTop: '70px', backgroundColor: theme.palette.pink }}>
        <SearchBar />
        {/* <Grid container spacing={2} display={'flex'}>
          {sortedComponents.map((widget, index) => {
            return (
              <Grid item xs={12} md={widget.size.cols} key={index} sx={{ order: widget.order }} >
                {widget.name === 'graph' && (
                  <DynamicGraph key={index} options={widget.options} type={widget.type} series={widget.series} height={widget.size.height} />
                )}
                {widget.name === 'info' && (
                  <InfoCard key={index} height={widget.size.height} data={widget.data} />
                )}
              </Grid>
            )
          })}
        </Grid> */}

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: 0, right: 0, height: 900, width: 200, backgroundColor: 'red' }}>
            1st div
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0, height: 600, width: 670, backgroundColor: 'blue' }}>
            2nd div
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Home
