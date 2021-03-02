import {SEARCH_MOVIE_START} from '../../consts/actionTypes';

export const searchMovie = payload => {
    return(
        {
        type: SEARCH_MOVIE_START,
        payload
        }
    )
}