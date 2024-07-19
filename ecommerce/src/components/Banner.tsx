"use client"
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

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const CustomPrevArrow = (props) => {
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

    const CustomNextArrow = (props) => {
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
        autoplaySpeed: 50000,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="flex w-full">
            <div className="w-2/3 relative">
                <Slider {...settings}>
                    {banners.map((banner, index) => (
                        <div key={index} className="relative h-64 md:h-96 p-2">
                            <img src={banner.src} alt={banner.alt} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="w-1/3 flex flex-col justify-between space-y-2 p-2">
                {additionalImages.map((image, index) => (
                    <div key={index} className="relative flex-1">
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
