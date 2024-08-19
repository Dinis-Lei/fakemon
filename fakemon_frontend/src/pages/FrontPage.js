import logo from '../logo.svg';
import { Box, Card, CardMedia, CardContent } from '@mui/material';

function FrontPage() {
  return (
    <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin={5}
    >

      <Card sx={{ display: 'flex', minWidth: '50em' }}>
        <CardMedia 
            component="img" 
            image={logo}
            sx={{ width: 500 }}
        />
        <CardContent>
            <h1>Name</h1>
            <p>Type: type</p>
            <p>Flavor text</p>            
        </CardContent>

      </Card>
    </Box>
  );
}

export default FrontPage;
