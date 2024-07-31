'use client';
import React, { useState } from 'react';
import { Product } from '../types/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { updateFavoriteStatus } from '@/services/productApi';

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(product.isFavorite);
    const [isAddedToCart, setIsAddedToCart] = useState(product.isAddToCard);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const toggleFavorite = async () => {
        const newFavoriteStatus = !isFavorite;
        const updatedProduct = {
            ...product,
            isFavorite: newFavoriteStatus,
            image: `/images/${product.id}.jpg`
        };
        setIsFavorite(newFavoriteStatus);
        setIsZoomed(true);
        setTimeout(() => setIsZoomed(false), 300);
        try {
            await updateFavoriteStatus(updatedProduct);
        } catch (error) {
            setIsFavorite(!newFavoriteStatus); // Revert state if the API call fails
        }
    };

    const toggleAddToCart =  () => {
        setIsAddedToCart(!isAddedToCart);
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 300); // Thời gian dừng rung sau 300ms
        // Xử lý logic thêm sản phẩm vào giỏ hàng hoặc bỏ ra nếu cần
    };

    return (
        <div className="border rounded-lg overflow-hidden shadow-md relative w-72"> {/* Fixed width for card */}
            <img
                src={product.image}
                alt={product.name}
                className={`w-full h-48 object-cover transition-transform duration-300 ${isZoomed ? 'transform scale-110' : ''}`}
            />
            <div className="absolute top-0 left-0 m-2 p-2 cursor-pointer">
                <FontAwesomeIcon
                    icon={faHeart}
                    className={`h-6 w-6 ${isFavorite ? 'text-red-500' : 'text-gray-300'}`}
                    onClick={toggleFavorite}
                />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg truncate" title={product.name}>{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-500">${Number(product.price).toFixed(2)}</p> {/* Ensure two decimal places */}
                    <div className={`ml-4 cursor-pointer ${isShaking ? 'animate-shake' : ''}`}>
                        <FontAwesomeIcon
                            icon={faCartPlus}
                            className={`h-6 w-6 ${isAddedToCart ? 'text-red-500' : 'text-gray-300'}`}
                            onClick={toggleAddToCart}
                        />
                    </div>
                </div>
                <p className="text-sm text-gray-700 mt-2 truncate" title={product.description}>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
