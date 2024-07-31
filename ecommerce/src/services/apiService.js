// services/apiService.js
import axios from 'axios';
import { API_URL } from '@/config';

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: Add request interceptors, response interceptors, or other configurations
api.interceptors.request.use(
    (config) => {
        // Add any custom logic before the request is sent, e.g., attach tokens
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors, e.g., logging, notifications
        return Promise.reject(error);
    }
);

export default api;
