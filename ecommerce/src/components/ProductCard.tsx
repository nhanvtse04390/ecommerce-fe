'use client';
import React, { useState } from 'react';
import { Product } from '../types/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(product.isFavorite);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        setIsZoomed(true);
        setTimeout(() => setIsZoomed(false), 300); // Thời gian trở lại bình thường sau 300ms
        // Xử lý logic cập nhật trạng thái yêu thích trên server hoặc trạng thái toàn cục nếu cần
    };

    const toggleAddToCart = () => {
        setIsAddedToCart(!isAddedToCart);
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 300); // Thời gian dừng rung sau 300ms
        // Xử lý logic thêm sản phẩm vào giỏ hàng hoặc bỏ ra nếu cần
    };

    return (
        <div className="border rounded-lg overflow-hidden shadow-md relative">
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
            <div className="p-4 flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-gray-500">${product.price}</p>
                </div>
                <div className={`ml-4 cursor-pointer ${isShaking ? 'animate-shake' : ''}`}>
                    <FontAwesomeIcon
                        icon={faCartPlus}
                        className={`h-6 w-6 ${isAddedToCart ? 'text-red-500' : 'text-gray-300'}`}
                        onClick={toggleAddToCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
