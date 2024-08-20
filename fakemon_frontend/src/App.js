import logo from './logo.svg';
import './App.css';
import { Box, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import FrontPage from './pages/FrontPage';
import ListPage from './pages/ListPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
