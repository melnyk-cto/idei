// core
import React, { useState, useEffect } from 'react';

// library
import Swiper from "react-id-swiper";

// components
import { SliderDescription } from "./components/SliderDescription/SliderDescription";

// assets
import 'swiper/swiper.scss'
import './SmallSlider.scss';
import image1 from "../../../assets/images/home/historia-1.jpg";
import image2 from "../../../assets/images/home/historia-2.jpg";
import image3 from "../../../assets/images/home/historia-3.jpg";
import image4 from "../../../assets/images/home/historia-4.jpg";
import styles from "./components/SliderDescription/SliderDescription.module.scss";

const listTitle = [0, 1, 2, 3, 4];
export const SmallSlider = () => {
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
    const [descriptionSwiper, getdDescriptionSwiper] = useState(null);


    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        spaceBetween: 33,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 20500,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 1640px
            1440: {
                spaceBetween: 100,
            },
        }
    };
    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        slidesPerView: 1,
        spaceBetween: 33,
        effect: 'fade',
        speed: 1000,
    };

    const descriptionSwiperParams = {
        getSwiper: getdDescriptionSwiper,
        slidesPerView: 1,
    };

    useEffect(() => {
        if (
            gallerySwiper !== null && gallerySwiper.controller &&
            thumbnailSwiper !== null && thumbnailSwiper.controller
            && descriptionSwiper !== null && descriptionSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            descriptionSwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = [descriptionSwiper, gallerySwiper];
        }
    }, [gallerySwiper, thumbnailSwiper, descriptionSwiper]);

    return (
        <div className='wrapperSlider'>
            <div className='smallSlider'>
                <div className='mainSlides'>
                    <Swiper {...thumbnailSwiperParams}>
                        <div className='thumbnail' style={{backgroundImage: `url(${image1})`}} />
                        <div className='thumbnail' style={{backgroundImage: `url(${image2})`}} />
                        <div className='thumbnail' style={{backgroundImage: `url(${image3})`}} />
                        <div className='thumbnail' style={{backgroundImage: `url(${image4})`}} />
                        <div className='thumbnail' style={{backgroundImage: `url(${image1})`}} />
                    </Swiper>
                </div>
                <div className='singleSlide'>
                    <Swiper  {...gallerySwiperParams}>
                        <div className='gallery' style={{backgroundImage: `url(${image1})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${image2})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${image3})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${image4})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${image1})`}} />
                    </Swiper>
                </div>
            </div>
            <div className={styles.description}>
                <Swiper {...descriptionSwiperParams}>
                    {listTitle.map(title =>
                        <div key={title}>
                            <SliderDescription title={title} />
                        </div>)}
                </Swiper>
            </div>
        </div>
    );
};