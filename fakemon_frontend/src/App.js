import logo from './logo.svg';
import './App.css';
import { Box, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import FrontPage from './pages/FrontPage';

function App() {
  return (
    <Box>
      <Navbar />
      <FrontPage />
    </Box>
  );
}

export default App;
