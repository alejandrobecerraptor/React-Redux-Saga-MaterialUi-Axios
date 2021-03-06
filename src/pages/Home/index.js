import React, {useState} from 'react';
import { Container, Typography, Card, Grid , TextField, Button } from '@material-ui/core';

import {MovieIcon} from '../../icons';
import styles from './Style';

export default ({history}) => {

	const [searchText , setSearchText] = useState ('');

	const classes = styles();

	const handleSearchTextChange = event =>{
		setSearchText(event.target.value);
	};

	const handleCleanTextClick = event =>{
		setSearchText('');
	};

	const handleSearchTextClick = event =>{
		history.push(`/results?movieName=${searchText}`);
	};
	
	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>
							Bievenid@! 
						</Typography>
					</Grid>
						<label><MovieIcon className={classes.MovieIcon}/></label>
					<Grid>
					<Typography>
							Dale animate a buscar el nombre de una Pelicula o Serie!
						</Typography>
						
					</Grid>
				</Grid>
				<TextField
					className={classes.textFieldSearch}
					value={searchText}
					placeholder="Buscar..."
					onChange={handleSearchTextChange}
				/>
				<Grid className={classes.buttonsContainer}>
					<Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
					<Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick} >Buscar</Button>
				</Grid>
			</Card>
		</Container>
	)
}
