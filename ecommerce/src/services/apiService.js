import axios from 'axios';
import { API_URL } from '@/config';

// Lấy danh sách sản phẩm
export const getProducts = async () => {
    try {
        console.log('API_URL:', API_URL)
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Thêm sản phẩm mới
export const addProduct = async (product) => {
    try {
        const response = await axios.post(`${API_URL}/products`, product);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Cập nhật sản phẩm
export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/products/${id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

// Xóa sản phẩm
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`${API_URL}/products/${id}`);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};
