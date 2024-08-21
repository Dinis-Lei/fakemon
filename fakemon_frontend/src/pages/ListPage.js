import { Box, Grid, Card, CardMedia, CardContent, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';


function ListPage() {

    const [fakemonList, setFakemonList] = useState([]);

    const getFakeMon = () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        const url = 'http://localhost:8000/fakemon/list_all';
        console.log(url);
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log("data", data);
                setFakemonList(data);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getFakeMon();
        console.log(fakemonList);
    }, []);
  
  
    return (
        <>
            <Toolbar />
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                margin={5}
                paddingLeft={5}
            >
                
                <Grid container spacing={5}>
                    {fakemonList.map((fakemon, index) => {

                        return (
                            <Grid item sx={3}>
                                <Card sx={{width: 400, height: 550 }} key={index}>
                                    <CardMedia 
                                        component="img" 
                                        image={fakemon.image}
                                        sx={{ width: 400, maxHeight: 400 }}
                                    />
                                    <CardContent>
                                        <h1>{fakemon.name}</h1>
                                        <p>Type: {fakemon.type1}</p>          
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
}

export default ListPage;
