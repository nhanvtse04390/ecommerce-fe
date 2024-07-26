'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlickCarousel.css';
import { uploadImage } from '../services/apiService';

const initialBanners = [
    { src: '/images/banner1.png', alt: 'Banner 1' },
    { src: '/images/banner2.png', alt: 'Banner 2' },
    { src: '/images/banner3.png', alt: 'Banner 3' },
];

const Banner: React.FC = () => {
    const [banners, setBanners] = useState(initialBanners);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                const imageUrl = await uploadImage(file);
                console.log('Image URL:', imageUrl);

                // Thêm banner mới vào danh sách
                setBanners([...banners, { src: imageUrl, alt: 'Uploaded Banner' }]);
            } catch (err) {
                setError('Error uploading image');
            }
        }
    };

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
        beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="flex justify-center mt-2 px-4">
            <div className="relative w-full max-w-7xl">
                <input type="file" onChange={handleFileChange} />
                {error && <div className="text-red-500">{error}</div>}
                <Slider {...settings}>
                    {banners.map((banner, index) => (
                        <div key={index} className="relative h-64 md:h-96">
                            <img src={banner.src} alt={banner.alt} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Banner;
