import {get} from 'lodash';
import {SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, actions){
    switch (actions.type) {
        case SEARCH_MOVIE_START:
            return {...state};
            break;

        case SEARCH_MOVIE_START:
            return {...state};
            break;

        case SEARCH_MOVIE_START:
            return {...state};
            break;
    
        default:
            return {...state};
            break;
    }
}
