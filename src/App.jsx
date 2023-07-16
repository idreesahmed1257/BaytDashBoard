import { createTheme } from '@mui/material/styles';
import Home from './Home';
import { ThemeProvider } from 'styled-components';


export default function App() {
  const theme = createTheme({
    palette: {
      blue: '#7371FC',
      purple: '#A594F9',
      peach: '#F5EFFF',
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}