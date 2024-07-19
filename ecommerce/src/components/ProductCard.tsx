'use client'
import React from 'react';
import { Product } from '../types/Product';

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
