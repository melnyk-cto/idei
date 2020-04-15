// core
import React, { useState, useEffect, useRef } from 'react';

// library
import Swiper from "react-id-swiper";
import { TimelineLite, Expo } from 'gsap'

// components
import { SliderDescription } from "./components/SliderDescription/SliderDescription";
import { useWindowSize } from "../../../hooks";

// image
import recentImage1 from "../../../assets/images/home/recent-project-1.jpg";
import recentImage2 from "../../../assets/images/home/recent-project-2.jpg";
import recentImage3 from "../../../assets/images/home/recent-project-3.jpg";

// styles
import 'swiper/swiper.scss'
import './SimpleSlider.scss';
import styles from "./SimpleSlider.module.scss";

const duration = 2;
const listTitle = [0, 1, 2, 3, 4];
export const SimpleSlider = ({activeSection}) => {
    const [width] = useWindowSize();

    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [descriptionSwiper, getdDescriptionSwiper] = useState(null);

    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        spaceBetween: 33,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        speed: 600,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 992px
            1200: {
                spaceBetween: 60,
                slidesPerView: 'auto',
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


    // animation
    let title = useRef(null);
    let slides = useRef(null);
    let description = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 992) {
            if (activeSection === 2) {
                t1.to(title, duration, {opacity: 1, ease: Expo.easeInOut})
                    .to(slides, duration, {opacity: 1, ease: Expo.easeInOut}, `-=${duration}`);
                if (width < 1400) {
                    t1.to(description, duration, {
                        opacity: 1,
                        minHeight: '28rem',
                        height: '30rem',
                        ease: Expo.easeInOut
                    }, `-=${duration}`)
                } else {
                    t1.to(description, duration, {
                        opacity: 1,
                        minHeight: '28rem',
                        height: '46rem',
                        ease: Expo.easeInOut
                    }, `-=${duration}`)
                }
            } else {
                t1.to(title, duration, {opacity: 0, ease: Expo.easeInOut})
                    .to(slides, duration, {opacity: 0, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(description, duration, {
                        opacity: 0,
                        minHeight: 0,
                        height: 0,
                        ease: Expo.easeInOut
                    }, `-=${duration}`)

            }
        }
    }, [activeSection, width, t1]);
    return (
        <>
            <h2 className={styles.title} ref={el => title = el}>PROYECTOS RECIENTES</h2>
            <div className='simpleSliderInner' ref={el => slides = el}>
                <Swiper {...thumbnailSwiperParams} >
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
            <div className={styles.description} ref={el => description = el}>
                <Swiper {...descriptionSwiperParams}>
                    {listTitle.map(title =>
                        <div key={title}>
                            <SliderDescription activeSection={activeSection} />
                        </div>)}
                </Swiper>
            </div>

        </>
    );
};