'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/Product';
import { getProducts } from '@/services/productApi';
import Banner from "@/components/Banner";
import LoadingPage from '@/components/LoadingPage'; // Import the LoadingPage component

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <LoadingPage />; // Use the LoadingPage component
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <main className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12">
            <Banner />
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
