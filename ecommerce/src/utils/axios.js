// utils/axios.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Đọc từ .env
    timeout: 10000,
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {
        // Thêm headers hoặc các cấu hình khác
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
