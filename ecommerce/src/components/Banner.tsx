'use client';
import React, { useEffect, useState } from 'react';
import '../styles/CustomCarousel.css';
import { getBannerUrls } from '@/services/apiService';

const bannerPaths = [
    'banners/banner1.jpg',
    'banners/banner2.jpg',
    'banners/banner3.jpg',
    'banners/banner4.jpg',
];

const bannerDefault = '/images/banner1.png';

const Banner = () => {
    const [banners, setBanners] = useState<string[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const urls = await getBannerUrls(bannerPaths);
                setBanners(urls);
                setImageLoaded(new Array(urls.length).fill(false));
                setLoading(false);
            } catch (err) {
                console.error('Error fetching banners', err);
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % (banners.length || 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [banners.length]);

    const handleImageLoad = (index: number) => {
        setImageLoaded(prev => {
            const newImageLoaded = [...prev];
            newImageLoaded[index] = true;
            return newImageLoaded;
        });
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    };

    return (
        <div className="custom-slider-container">
            <div className="custom-slider">
                {loading ? (
                    <div className="loading-spinner">Loading...</div>
                ) : (
                    <>
                        {banners.map((src, index) => (
                            <div
                                key={index}
                                className={`slide ${currentSlide === index ? 'active' : ''}`}
                            >
                                <img
                                    src={src}
                                    alt={`Banner ${index + 1}`}
                                    className="slide-img"
                                    onLoad={() => handleImageLoad(index)}
                                    style={{ display: imageLoaded[index] ? 'block' : 'none' }}
                                />
                                {!imageLoaded[index] && (
                                    <div className="loading-placeholder">Loading...</div>
                                )}
                            </div>
                        ))}
                    </>
                )}
                <button className="prev" onClick={goToPrevSlide}>
                    &#9664;
                </button>
                <button className="next" onClick={goToNextSlide}>
                    &#9654;
                </button>
            </div>
            <div className="dots-container">
                {banners.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Banner;
