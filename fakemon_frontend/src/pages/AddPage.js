import { Box, Card, CardMedia, CardContent, Toolbar, Button, CardHeader, TextField, MenuItem, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

function AddPage() {

    const types = [
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


    const [fakemon, setFakemon] = useState({
        name: null,
        type1: "Normal",
        type2: null,
        image: null,
        description: null
    });

    const [errors, setErrors] = useState({
        name: false,
        image: false,
        description: false
    });

    const handleChange = (event) => {
        let updatedData = {};
        if (event.target.value === ""){
            errors[event.target.id] = true;
            setErrors(errors);
        }
        else {
            errors[event.target.id] = false;
            setErrors(errors);
        }
        let value = event.target.value !== "" ? event.target.value : null;
        updatedData[event.target.id] = value;
        setFakemon(data => ({
            ...data,
            ...updatedData
        }));
    } 

    const postFakeMon = () => {
        
        console.log(fakemon);

        if (fakemon.name === null) {
            setErrors({...errors, name: true});
            return;
        }
        if (fakemon.image === null) {
            setErrors({...errors, image: true});
            return;
        }
        if (fakemon.description === null) {
            setErrors({...errors, description: true});
            return;
        }
        
        const data = {};

        Object.keys(fakemon).forEach((key) => {
            if (key == "type2" && (fakemon[key] == "None" || fakemon[key] == null)) {
                return;
            }
            data[key] = fakemon[key];
        });


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        };
        const url = 'http://localhost:8000/fakemon/';
        console.log(url);
        fetch(url, options)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    return (
        <>
            <Toolbar />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                margin={5}
            >
                <Card sx={{ minWidth: '50em' }}>
                    <CardHeader title="Add a Fakemon" />
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                    id="name" 
                                    label="Name" 
                                    variant="outlined" 
                                    error={errors.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                            <TextField 
                                id="type1" 
                                label="Type 1" 
                                variant="outlined" 
                                select
                                defaultValue="Normal"
                                onChange={(event) => {
                                    let updatedData = {
                                        "type1": event.target.value
                                    };
                                    setFakemon(data => ({
                                        ...data,
                                        ...updatedData
                                    }));
                                }}
                            >
                                {types.map((type, index) => {
                                    return (
                                        <MenuItem key={index} value={type}>{type}</MenuItem>
                                    )
                                })}
                            </TextField>
                            </Grid>  
                            <Grid item xs={6}>
                                <TextField 
                                    id="type1" 
                                    label="Type 2" 
                                    variant="outlined" 
                                    select
                                    defaultValue="None"
                                    onChange={(event) => {
                                        let updatedData = {
                                            "type2": event.target.value
                                        };
                                        setFakemon(data => ({
                                            ...data,
                                            ...updatedData
                                        }));
                                    }}
                                >
                                    <MenuItem key={0} value={"None"}>None</MenuItem>
                                    {types.map((type, index) => {
                                        return (
                                            <MenuItem key={index+1} value={type}>{type}</MenuItem>
                                        )
                                    })}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    id="image" 
                                    label="Image URL" 
                                    variant="outlined" 
                                    fullWidth 
                                    error={errors.image}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    id="description" 
                                    label="Description" 
                                    variant="outlined" 
                                    multiline
                                    fullWidth
                                    rows={4}
                                    error={errors.description}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>                        
                    </CardContent>
                </Card>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={postFakeMon} variant='contained'>Upload Fakemon</Button>
            </Box>
        </>
    );
}

export default AddPage;
