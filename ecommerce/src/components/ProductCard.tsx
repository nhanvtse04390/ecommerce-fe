'use client'
import React, {useEffect, useState} from 'react';
import { Product } from '../types/Product';
import {getUnsplashImage} from "@/services/apiService";

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const url = await getUnsplashImage('nature'); // Ví dụ: lấy hình ảnh liên quan đến 'nature'
                setImageUrl(url);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchImage();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

        return (
        <div className="border rounded-lg overflow-hidden shadow-md">
            <img src={imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
