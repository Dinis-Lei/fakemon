import { Box, Card, CardMedia, CardContent, Toolbar, Button } from '@mui/material';
import { useEffect, useState } from 'react';

function FrontPage() {
  
  const [fakemon, setFakemon] = useState({});

  const getFakeMon = () => {
      const options = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
          }
      };
      const url = 'http://localhost:8000/fakemon/random';
      console.log(url);
      fetch(url, options)
          .then(response => response.json())
          .then(data => {
              console.log("data", data);
              setFakemon(data);
          })
          .catch(error => console.error(error));
  }
  
  useEffect(() => {
      getFakeMon();
      console.log(fakemon);
  }, []);
  
  return (
    <>
      <Toolbar />
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin={5}
      >
        <Card sx={{ display: 'flex', minWidth: '50em' }}>
          <CardMedia 
              component="img" 
              image={fakemon.image}
              sx={{ width: 500 }}
          />
          <CardContent>
              <h1>{fakemon.name}</h1>
              <p>Type(s): {fakemon.type1}{fakemon.type2 ? `, ${fakemon.type2}` : ''}</p>
              <p>{fakemon.description}</p>            
          </CardContent>
        </Card>
      </Box>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button onClick={getFakeMon} variant='contained'>Get Random Fakemon</Button>
      </Box>
    </>
  );
}

export default FrontPage;
