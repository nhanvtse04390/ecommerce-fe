'use client'
import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlickCarousel.css';
import { getBannerUrls } from '../services/apiService';

const bannerPaths = [
    'banners/banner1.jpg',
    'banners/banner2.jpg',
    'banners/banner3.jpg',
];

const bannerDefault = '../../images/banner1.png'


const Banner: React.FC = () => {
    const [banners, setBanners] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const sliderRef = useRef<Slider | null>(null);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const urls = await getBannerUrls(bannerPaths);
                setBanners(urls);
            } catch (err) {
                setError('Error fetching banners');
            }
        };

        fetchBanners();
    }, []);

    // Custom arrow components
    const CustomPrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <button
                className={`${className} slick-prev text-white bg-black bg-opacity-50 p-2 rounded-full`}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                &#9664;
            </button>
        );
    };

    const CustomNextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <button
                className={`${className} slick-next text-white bg-black bg-opacity-50 p-2 rounded-full`}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                &#9654;
            </button>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="flex justify-center mt-2 px-4">
            <div className="relative w-full max-w-7xl">
                {error && <div className="text-red-500">{error}</div>}
                {banners.length === 0 ? (
                    <div className="relative h-64 md:h-96">
                        <img
                            src={bannerDefault}
                            alt={`Banner`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ) : (
                    <Slider ref={sliderRef} {...settings}>
                        <div className="relative h-64 md:h-96">
                            <img
                                src={bannerDefault}
                                alt={`Banner`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        {banners.map((src, index) => (
                            <div key={index} className="relative h-64 md:h-96">
                                <img
                                    src={src}
                                    alt={`Banner ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
};

export default Banner;
