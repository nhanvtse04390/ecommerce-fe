import axios from 'axios';
import { API_URL } from '@/config';

// Lấy danh sách sản phẩm
export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        const products = response.data.map(product => ({
            ...product,
            image: `https://source.unsplash.com/random/400x400?sig=${product.id}`
        }));
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getUnsplashImage = async (query) => {
    const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}`);
    if (!response.ok) {
        throw new Error('Failed to fetch image');
    }
    const data = await response.json();
    return data.urls.regular; // Trả về URL của hình ảnh
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
