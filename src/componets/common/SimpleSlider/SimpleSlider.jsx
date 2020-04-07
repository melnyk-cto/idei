// core
import React, { useState, useEffect } from 'react';

// components
import { useWindowSize } from "../../../hooks";

// library
import Swiper from "react-id-swiper";

// image
import recentImage1 from "../../../assets/images/home/recent-project-1.png";
import recentImage3 from "../../../assets/images/home/recent-project-3.png";

// styles
import 'swiper/swiper.scss'
import './SimpleSlider.scss';

export const SimpleSlider = () => {
    const [width] = useWindowSize();

    const [swiper, updateSwiper] = useState(null);
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        spaceBetween: 33,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        loop: true,
        slideToClickedSlide: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 20500,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 992px
            992: {
                spaceBetween: 100,
                slidesPerView: 'auto',
            }
        }
    };
    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        slidesPerView: 1,
        spaceBetween: 33,
        effect: 'fade',
        speed: 1000,
    };

    useEffect(() => {
        if (
            gallerySwiper !== null &&
            gallerySwiper.controller &&
            thumbnailSwiper !== null &&
            thumbnailSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, [gallerySwiper, thumbnailSwiper]);

    return (
        <div className='sliderMobile'>
            <Swiper {...thumbnailSwiperParams}>
                <div className='thumbnail' style={{backgroundImage: `url(${recentImage1})`}} />
                <div className='thumbnail' style={{backgroundImage: `url(${recentImage3})`}} />
                <div className='thumbnail' style={{backgroundImage: `url(${recentImage1})`}} />
                <div className='thumbnail' style={{backgroundImage: `url(${recentImage3})`}} />
                <div className='thumbnail' style={{backgroundImage: `url(${recentImage1})`}} />
            </Swiper>
            {width <= 992 && <Swiper {...gallerySwiperParams} getSwiper={updateSwiper}>
                <div className='gallery' style={{backgroundImage: `url(${recentImage1})`}} />
                <div className='gallery' style={{backgroundImage: `url(${recentImage3})`}} />
                <div className='gallery' style={{backgroundImage: `url(${recentImage1})`}} />
                <div className='gallery' style={{backgroundImage: `url(${recentImage3})`}} />
                <div className='thumbnail' style={{backgroundImage: `url(${recentImage1})`}} />
            </Swiper>}
        </div>
    );
};