import {get} from 'lodash';
import {SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, action){
    switch (action.type) {
        case SEARCH_MOVIE_START:
            return {...state, isLoading: true};
            break;
        case SEARCH_MOVIE_ERROR:
            return {...state, isLoading: false, movies: null};
            break;

        case SEARCH_MOVIE_COMPLETE:
            return {...state, isLoading: false, movieResults: action.results.data};
            break;
    
        default:
            return {...state};
            break;
    }
}
