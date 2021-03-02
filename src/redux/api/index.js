import axios from 'axios';

const baseURL = 'https://www.omdbapi.com/?i=tt3896198&apikey=5d27e142';

export const apiCall = (url,data,headers,method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
});