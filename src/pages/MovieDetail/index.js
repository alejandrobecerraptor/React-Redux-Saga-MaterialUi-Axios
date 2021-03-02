import React,{useEffect} from 'react';
import { Container, Typography, Card, Grid , TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import {searchMovieById} from '../../redux/actions/search';

export default ({ match }) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const movieId = match.params.id;
        console.log(movieId)
        dispatch(searchMovieById({ movieId }));
    });
    return(
        <Container>
            Moviedetail
        </Container>
    );
}