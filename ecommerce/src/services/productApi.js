import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from './firebaseConfig'; // Ensure you have exported `app` from firebaseConfig
import api from '../services/apiService';

// Initialize Firebase Storage
const storage = getStorage(app);

// Function to get URLs for banners from Firebase Storage
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

// Function to get image URL from Firebase Storage
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

// Function to upload an image to Firebase Storage
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

// Fetch product list and their images
export const getProducts = async () => {
    try {
        const response = await api.get('/products');
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

export const updateFavoriteStatus = async (product) => {
    try {
        const response = await api.put(`/products/${product.id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
