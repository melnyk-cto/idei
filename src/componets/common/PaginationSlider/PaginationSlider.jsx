// core
import React, { useState, useEffect } from 'react';

// library
import Swiper from "react-id-swiper";

// image
import recentImage1 from "../../../assets/images/home/recent-project-1.jpg";
import recentImage2 from "../../../assets/images/home/recent-project-2.jpg";
import recentImage3 from "../../../assets/images/home/recent-project-3.jpg";

// styles
import 'swiper/swiper.scss'
import './PaginationSlider.scss';
import styles from "./components/SliderDescription/SliderDescription.module.scss";
import { SliderDescription } from "./components/SliderDescription/SliderDescription";

const listTitle = [0, 1, 2, 3, 4];
const names = ['AMORADA', 'BALCONES DE LAS MITRAS', 'LOS CASTAÑOS', 'CÉNTRIKA PLATINUM', 'TORRE CÉNTRIKA ELITE',
    'ESTANCIAS TORONTO PRIVADAS DEL CANADÁ', 'ESTANCIAS MONTREAL PRIVADAS DEL CANADÁ', 'ESTANCIAS VALLE DE PLATA'];
export const PaginationSlider = () => {
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [descriptionSwiper, getdDescriptionSwiper] = useState(null);
    const [active, setActive] = useState(0);

    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        spaceBetween: 33,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        autoplay: {
            delay: 20500,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 992px
            992: {
                spaceBetween: 160,
                slidesPerView: 1,
                // loop: true,
            }
        }
    };

    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        slidesPerView: 1,
        spaceBetween: 33,
    };

    const descriptionSwiperParams = {
        getSwiper: getdDescriptionSwiper,
        slidesPerView: 1,
    };

    const goToSlide = (number) => {
        thumbnailSwiper.slideTo(number);
        setActive(number);
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
        <>
            <ul className='pagination only-desktop'>
                {names.map((name, index) =>
                    <li key={name} onClick={() => goToSlide(index)}
                        className={index === active ? 'active' : ''}>{name}</li>
                )}
            </ul>
            <div className='sliderPagination'>
                <Swiper {...thumbnailSwiperParams}>
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage1})`}} />
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage2})`}} />
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage3})`}} />
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage1})`}} />
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage2})`}} />
                </Swiper>
                <div className='only-mobile'>
                    <Swiper  {...gallerySwiperParams}>
                        <div className='gallery' style={{backgroundImage: `url(${recentImage1})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${recentImage2})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${recentImage3})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${recentImage1})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${recentImage2})`}} />
                    </Swiper>
                </div>
            </div>
            <div className={styles.description}>
                <Swiper {...descriptionSwiperParams}>
                    {listTitle.map(title =>
                        <div key={title}>
                            <SliderDescription />
                        </div>)}
                </Swiper>
            </div>
        </>
    );
};