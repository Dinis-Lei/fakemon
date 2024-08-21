import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import FrontPage from './pages/FrontPage';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
