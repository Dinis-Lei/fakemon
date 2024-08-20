import logo from './logo.svg';
import './App.css';
import { Box, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import FrontPage from './pages/FrontPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Box>
      <Navbar />
      {/* <FrontPage /> */}
      <ListPage />
    </Box>
  );
}

export default App;
