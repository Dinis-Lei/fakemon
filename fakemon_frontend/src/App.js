import logo from './logo.svg';
import './App.css';
import { Box, Grid } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box>
            <img src={logo} className="App-logo" alt="logo" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img src={logo} className="App-logo" alt="logo" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
