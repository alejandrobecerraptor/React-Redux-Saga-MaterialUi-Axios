import React from 'react';
import { Container, Typography, Card, Grid , TextField, Button } from '@material-ui/core';

const MovieResult = ({Title,Year,Type,imdbId,Poster}) =>{
    return(
        <Card>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title}/>
                </Grid>
                <Grid item>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="primary" variant="contained">Ber mas</Button>
                </Grid>
            </Grid>
        </Card>
    );
}

export default MovieResult;