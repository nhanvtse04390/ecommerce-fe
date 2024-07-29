'use client'
import React, { useState } from 'react';
import { uploadImage } from '@/services/apiService';

interface Product {
    name: string;
    price: number;
    imageUrl: string;
}

const ProductUpload: React.FC = () => {
    const [product, setProduct] = useState<Product>({ name: '', price: 0, imageUrl: '' });
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setError('Please select an image.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const imageUrl = await uploadImage(file);
            const newProduct = { ...product, imageUrl };
            // Call your API to save the product details, e.g. saveProduct(newProduct)
            console.log('Product details:', newProduct);
            setLoading(false);
            // Clear form or redirect
        } catch (err) {
            setError('Error uploading image');
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload New Product</h1>
            {error && <div className="text-red-500">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={loading}
                >
                    {loading ? 'Uploading...' : 'Upload Product'}
                </button>
            </form>
        </div>
    );
};

export default ProductUpload;
