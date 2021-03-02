import { put, call, takeLatest} from 'redux-saga/effects';
import {SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE} from '../../consts/actionTypes';

import {apiCall} from '../api';

export function* searchMovie({ payload}) {
    
    try {
        console.log('eureca??');
        
    } catch (error) {
       
    }
}

export default function* search() {
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
}