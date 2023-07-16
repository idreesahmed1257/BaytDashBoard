import { Box, Grid } from '@mui/material'
import { useTheme } from 'styled-components';
import { initFile } from './components/init'
import Navbar from './components/Navbar'
import SearchBar from './components/searchBar'
import DynamicGraph from './components/DynamicGraph'
import InfoCard from './components/InfoCard'


const Home = () => {
  const theme = useTheme()

  const sortedComponents = initFile.sort((a, b) => {
    return a.priority - b.priority; // Sort by priority
  });

  return (
    <div>
      <Navbar />
      <Box sx={{ px: '20px', paddingTop: '70px', backgroundColor: theme.palette.peach }}>
        <SearchBar />
        <Grid container spacing={2} display={'flex'}>
          {sortedComponents.map((widget, index) => {
            return (
              <Grid item xs={12} md={widget.size.cols} key={index} sx={{ order: widget.order }} >
                {widget.name === 'graph' && (
                  <DynamicGraph key={index} options={widget.options} type={widget.type} series={widget.series} height={widget.size.height} />
                )}
                {widget.name === 'info' && (
                  <InfoCard key={index} height={widget.size.height} API={widget.API} />
                )}
              </Grid>
            )
          })}
        </Grid>




      </Box>
    </div>
  )
}

export default Home
