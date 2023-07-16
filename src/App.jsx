import { createTheme } from '@mui/material/styles';
import Home from './Home';
import { ThemeProvider } from 'styled-components';


 
export default function App() {
    const theme = createTheme({
        palette: {
          blue:  '#7371FC',
          purple: '#A594F9',
          lightPurple: '#CDC1FF',
          pink: '#E5D9F2 ',
          peach: '#F5EFFF',
          black: '#000'
        },
      });
 
    return (
    <>
     <ThemeProvider theme={theme}>
       <Home/>
    </ThemeProvider>
     </>
);
}