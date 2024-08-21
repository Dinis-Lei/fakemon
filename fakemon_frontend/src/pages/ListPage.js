import { Box, Grid, Card, CardMedia, CardContent, Toolbar, MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';


function ListPage() {

    const types = [
        "None",
        "Normal",
        "Fire",
        "Water",
        "Electric",
        "Grass",
        "Ice",
        "Fighting",
        "Poison",
        "Ground",
        "Flying",
        "Psychic",
        "Bug",
        "Rock",
        "Ghost",
        "Dragon",
        "Dark",
        "Steel",
        "Fairy",
    ] 

    const [type, setType] = useState("None");

    const [fakemonList, setFakemonList] = useState([]);

    const getFakeMon = () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        let url = 'http://localhost:8000/fakemon/list_all';
        if (type !== "None") {
            url += `?type=${type}`;
        }

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
    }, [type]);
  
  
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
                    <Grid item xs={12}>
                    <TextField 
                                id="type" 
                                label="Type" 
                                variant="outlined" 
                                select
                                defaultValue="None"
                                onChange={(event) => {
                                    setType(event.target.value);
                                }}
                            >
                                {types.map((type, index) => {
                                    return (
                                        <MenuItem key={index} value={type}>{type}</MenuItem>
                                    )
                                })}
                            </TextField>
                    </Grid>
                    {fakemonList.map((fakemon, index) => {

                        return (
                            <Grid item xs={3}>
                                <Card sx={{width: 400, height: 550 }} key={index}>
                                    <CardMedia 
                                        component="img" 
                                        image={fakemon.image}
                                        sx={{ width: 400, maxHeight: 400 }}
                                    />
                                    <CardContent>
                                        <h1>{fakemon.name}</h1>
                                        <p>Type(s): {fakemon.type1}{fakemon.type2 ? `, ${fakemon.type2}` : ''}</p>          
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
