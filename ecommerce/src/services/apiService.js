import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from './firebaseConfig'; // Đảm bảo rằng bạn đã export app từ firebaseConfig
import axios from 'axios';
import { API_URL } from '@/config';

// Khởi tạo Firebase Storage
const storage = getStorage(app);

// Hàm để lấy URL của các banner từ Firebase Storage
export const getBannerUrls = async (bannerPaths) => {
    try {
        const urls = await Promise.all(
            bannerPaths.map(async (path) => {
                const storageRef = ref(storage, path);
                const url = await getDownloadURL(storageRef);
                return url;
            })
        );
        return urls;
    } catch (error) {
        console.error('Error fetching banner URLs:', error);
        throw error;
    }
};

// Hàm để lấy URL hình ảnh từ Firebase Storage
export const getImageURL = async (fileName) => {
    try {
        const storageRef = ref(storage, `images/${fileName}`);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error(`Error fetching image URL for ${fileName}:`, error);
        throw error;
    }
};

// Hàm để tải ảnh lên Firebase Storage
export const uploadImage = async (file) => {
    try {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

// Lấy danh sách sản phẩm và hình ảnh tương ứng
export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        const products = response.data;

        const productsWithImages = await Promise.all(products.map(async (product) => {
            try {
                const imageUrl = await getImageURL(`${product.id}.jpg`);
                return {
                    ...product,
                    image: imageUrl
                };
            } catch (error) {
                console.error(`Error fetching image for product ${product.id}:`, error);
                return {
                    ...product,
                    image: `https://source.unsplash.com/random/400x400?sig=${product.id}`
                };
            }
        }));

        return productsWithImages;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
