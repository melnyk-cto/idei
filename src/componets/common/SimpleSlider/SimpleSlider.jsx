// core
import React, { useState, useEffect } from 'react';

// components
import { useWindowSize } from "../../../hooks";

// library
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";

// image
import recentImage1 from "../../../assets/images/home/recent-project-1.jpg";
import recentImage2 from "../../../assets/images/home/recent-project-2.jpg";
import recentImage3 from "../../../assets/images/home/recent-project-3.jpg";

// styles
import 'swiper/swiper.scss'
import './SimpleSlider.scss';
import styles from './SimpleSlider.module.scss';
import republica from "../../../assets/images/home/republica.svg";

export const SimpleSlider = () => {
    const [width] = useWindowSize();

    const [swiper, updateSwiper] = useState(null);
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

    console.log(swiper);
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
            delay: 2500,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 992px
            992: {
                slidesPerView: 'auto',
                loop: true,
            },
            1440: {
                spaceBetween: 160,
                slidesPerView: 'auto',
                loop: true,
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
        <>
            <div className='sliderMobile'>
                <Swiper {...thumbnailSwiperParams}>
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage1})`}} />
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage2})`}} />
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage3})`}} />
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage1})`}} />
                    <div className='thumbnail' style={{backgroundImage: `url(${recentImage2})`}} />
                </Swiper>
                {width <= 992 && <Swiper  {...gallerySwiperParams} getSwiper={updateSwiper}>
                    <div className='gallery' style={{backgroundImage: `url(${recentImage1})`}} />
                    <div className='gallery' style={{backgroundImage: `url(${recentImage2})`}} />
                    <div className='gallery' style={{backgroundImage: `url(${recentImage3})`}} />
                    <div className='gallery' style={{backgroundImage: `url(${recentImage1})`}} />
                    <div className='gallery' style={{backgroundImage: `url(${recentImage2})`}} />
                </Swiper>}
            </div>
            <div className={styles.description}>
                <img src={republica} alt='' />
                <ul className='dashed'>
                    <li>236 departamentos de 130 a 832 m2</li>
                    <li>Amenidades:</li>
                </ul>
                <ul className='dashed'>
                    <li>Alberca con doble carril de nado</li>
                    <li>Jacuzzi</li>
                    <li>Gimnasio</li>
                    <li>Cuarto de Juegos</li>
                    <li>Salón de eventos</li>
                    <li>Sala de visitas</li>
                    <li>
                        23,200 m2 de áreas verdes,
                        espejos de aguas y andadores
                    </li>
                </ul>
                <div className={styles.link}>
                    <Link to=''>Ver Projecto</Link>
                </div>
            </div>
        </>
    );
};