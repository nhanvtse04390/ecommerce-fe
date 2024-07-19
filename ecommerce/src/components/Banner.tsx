'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SlickCarousel.css';

const banners = [
    { src: '/images/banner1.png', alt: 'Banner 1' },
    { src: '/images/banner2.png', alt: 'Banner 2' },
    { src: '/images/banner3.png', alt: 'Banner 3' },
];

const additionalImages = [
    { src: '/images/banner1.png', alt: 'Extra Image 1' },
    { src: '/images/banner2.png', alt: 'Extra Image 2' },
];

const Banner: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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
        <div className="flex justify-center w-full">
            <div className="w-full md:w-3/4 lg:w-3/4 relative">
                <Slider {...settings}>
                    {banners.map((banner, index) => (
                        <div key={index} className="relative h-64 md:h-80 lg:h-96 p-2">
                            <img src={banner.src} alt={banner.alt} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                </Slider>
                <div className="hidden md:flex md:flex-col md:w-1/3 lg:w-1/3 absolute right-0 top-0 bottom-0 space-y-2 p-2">
                    {additionalImages.map((image, index) => (
                        <div key={index} className="relative h-32 md:h-auto">
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
