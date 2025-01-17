import apiClient from "./axiosInstance";

export const findAllMoviesApi = async (query, page = 1) => {
    try {
        const response = await apiClient.get('/', {
            params: {
                s: query,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.log('영화 목록 불러오기 중 에러 발생', error);
        return { Response: 'False', Error: error.message };
    }
};
