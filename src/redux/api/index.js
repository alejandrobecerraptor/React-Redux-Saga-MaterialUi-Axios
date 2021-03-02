import axios from 'axios';

const baseURL = 'https://www.omdbapi.com/?apikey=5d27e142';

export const apiCall = (url,data,headers,method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
});