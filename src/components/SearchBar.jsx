import { Search } from '@mui/icons-material'
import { Box, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper } from '@mui/material'
 
const SearchBar = () => {
    const searchBoxes = ['Customer', 'Inventory', 'Order']
  return (
    <div>
      <Paper sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: '20px', mt: '20px', mb: '20px'}}>
        <Box >
            <h1>Welcome Idrees Buddy</h1>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-evenly', gap:'10px', alignItems: 'center'}}>
            {searchBoxes.map((box, index) => { 
                return (
                <Box key={index}>
                <InputLabel style={{fontWeight: 'bold'}} htmlFor={box}>{box}</InputLabel>
                <OutlinedInput
                    id={box}
                    size='small'
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        edge="end"
                        >
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
                />
                </Box>
            )})}
           
             
            
        </Box>
    </Paper>
    </div>
  )
}

export default SearchBar
