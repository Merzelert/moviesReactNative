import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '83e57ad893fac390af3ad21fd2e1e73d',
        language: 'en-US',
    },
});

export default movieDB;
