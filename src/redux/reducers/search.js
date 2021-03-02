import {get} from 'lodash';
import {SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, action){
    switch (action.type) {
        case SEARCH_MOVIE_START:
            {
                // console.log('entro aqui');
                return {...state};
            break;
            }

        case SEARCH_MOVIE_ERROR:
            // console.log(action);
            return {...state};
            break;

        case SEARCH_MOVIE_COMPLETE:
            // console.log(action);
            return {...state};
            break;
    
        default:
            return {...state};
            break;
    }
}
