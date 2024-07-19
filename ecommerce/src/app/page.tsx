'use client'
import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product';
import Banner from "@/components/Banner";

const products: Product[] = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/images/banner1.png' },
    { id: 2, name: 'Product 2', price: 39.99, image: '/images/banner2.png' },
    { id: 3, name: 'Product 3', price: 19.99, image: '/images/banner3.png' },
    { id: 4, name: 'Product 4', price: 49.99, image: '/images/banner1.png' },
    { id: 5, name: 'Product 5', price: 29.99, image: '/images/banner2.png' },
    { id: 6, name: 'Product 6', price: 39.99, image: '/images/banner3.png' },
    { id: 7, name: 'Product 7', price: 19.99, image: '/images/banner2.png' },
    { id: 8, name: 'Product 8', price: 49.99, image: '/images/banner1.png' },
    { id: 9, name: 'Product 9', price: 29.99, image: '/images/banner3.png' },
    { id: 10, name: 'Product 10', price: 39.99, image: '/images/banner1.png' },
    { id: 11, name: 'Product 11', price: 19.99, image: '/images/banner2.png' },
    { id: 12, name: 'Product 12', price: 49.99, image: '/images/banner3.png' },
    { id: 13, name: 'Product 13', price: 29.99, image: '/images/banner1.png' },
    { id: 14, name: 'Product 14', price: 39.99, image: '/images/banner2.png' },
    { id: 15, name: 'Product 15', price: 19.99, image: '/images/banner3.png' },
    { id: 16, name: 'Product 16', price: 49.99, image: '/images/banner2.png' },
    { id: 17, name: 'Product 17', price: 29.99, image: '/images/banner3.png' },
    { id: 18, name: 'Product 18', price: 39.99, image: '/images/banner1.png' },
    { id: 19, name: 'Product 19', price: 19.99, image: '/images/banner2.png' },
    { id: 20, name: 'Product 20', price: 49.99, image: '/images/banner1.png' },
];

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="w-full max-w-screen-xl bg-gray-100 rounded-2xl mt-6 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
}
