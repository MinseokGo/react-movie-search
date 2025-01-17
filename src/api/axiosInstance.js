import axios from 'axios';

const MOVIE_SEARCH_API_KEY = process.env.REACT_APP_MOVIE_SEARCH_API_KEY;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const apiClient = axios.create({
    baseURL: 'https://www.omdbapi.com/'
});

apiClient.interceptors.request.use(
    (config) => {
        console.log('영화 목록을 불러오는 중...');
        config.params = {
            apikey: MOVIE_SEARCH_API_KEY,
            i: CLIENT_ID,
            ...config.params
        };
        return config;
    },
    (error) => {
        console.log('영화 목록 불러오기 요청 중 에러 발생');
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log('영화 목록 불러오기 응답 처리 중 에러 발생');
        return Promise.reject(error);
    }
);

export default apiClient;
