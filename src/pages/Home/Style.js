import { makeStyles } from '@material-ui/core';
import { makeStyle } from '@material-ui/styles';

const centerredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centerredStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2rem',
        ...centerredStyleObj
    },
    title:{
        fontSize: '4rem'
    },
    titleGridContainer: {
        ...centerredStyleObj
    },
    textFieldSearch: {
        width: '90%'
    },
    searchButton: {
        marginLeft:'.5rem'
    },
    buttonsContainer: {
        marginTop: '.5rem'
    },
    MovieIcon: {
        fontSize: '4rem'
    }
});