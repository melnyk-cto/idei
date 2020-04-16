// core
import React, { useState, useEffect, useRef } from 'react';

// library
import Swiper from "react-id-swiper";
import { TimelineLite, Expo } from 'gsap'

// components
import { useWindowSize } from "../../../hooks";

// image
import recentImage1 from "../../../assets/images/home/recent-project-1.jpg";
import recentImage2 from "../../../assets/images/home/recent-project-2.jpg";
import recentImage3 from "../../../assets/images/home/recent-project-3.jpg";

// styles
import 'swiper/swiper.scss'
import './PaginationSlider.scss';
import styles from "./components/SliderDescription/SliderDescription.module.scss";
import { SliderDescription } from "./components/SliderDescription/SliderDescription";

const duration = 2;
const listTitle = [0, 1, 2, 3, 4];
const names = ['AMORADA', 'BALCONES DE LAS MITRAS', 'LOS CASTAÑOS', 'CÉNTRIKA PLATINUM', 'TORRE CÉNTRIKA ELITE',
    'ESTANCIAS TORONTO PRIVADAS DEL CANADÁ', 'ESTANCIAS MONTREAL PRIVADAS DEL CANADÁ', 'ESTANCIAS VALLE DE PLATA'];
export const PaginationSlider = ({activeSection}) => {
    const [width] = useWindowSize();

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

    // animation
    let slides = useRef(null);
    let description = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 1200) {
            if (activeSection === 1) {
                t1.to(slides, duration, {opacity: 1, ease: Expo.easeInOut})
                    .to(slides, duration, {opacity: 1, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(description, duration, {
                        opacity: 1,
                        height: 'auto',
                        ease: Expo.easeInOut
                    }, `-=${duration}`)
                    .to('.pagination-list', duration, {
                        opacity: 1,
                        y: 0,
                        ease: Expo.easeInOut,
                    }, `-=${duration}`);

            } else {
                t1.to(slides, duration, {opacity: 0, ease: Expo.easeInOut})
                    .to(description, duration, {
                        opacity: 0,
                        height: 0,
                        ease: Expo.easeInOut
                    }, `-=${duration}`)
                    .to('.pagination-list', duration, {
                        opacity: 0,
                        y: 300,
                        ease: Expo.easeInOut,
                    }, `-=${duration}`);
            }
        }
    }, [activeSection, width, t1]);

    return (
        <>
            <ul className='pagination only-desktop'>
                {names.map((name, index) =>
                    <li key={name}
                        onClick={() => goToSlide(index)}
                        className={index === active ? 'pagination-list active' : 'pagination-list'}>{name}</li>
                )}
            </ul>
            <div className='sliderPagination' ref={el => slides = el}>
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