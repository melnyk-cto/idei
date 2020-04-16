// core
import React, { useState, useEffect, useRef } from 'react';

// library
import Swiper from "react-id-swiper";
import { TimelineLite, Expo } from 'gsap'

// components
import { SliderDescription } from "./components/SliderDescription/SliderDescription";
import { useWindowSize } from "../../../hooks";

// assets
import 'swiper/swiper.scss'
import './SmallSlider.scss';
import styles from "./SmallSlider.module.scss";
import image1 from "../../../assets/images/home/historia-1.jpg";
import image2 from "../../../assets/images/home/historia-2.jpg";
import image3 from "../../../assets/images/home/historia-3.jpg";
import image4 from "../../../assets/images/home/historia-4.jpg";

const duration = 2;
const listTitle = [0, 1, 2, 3, 4];
export const SmallSlider = ({activeSection}) => {
    const [width] = useWindowSize();

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


    // animation
    let title = useRef(null);
    let subTitle1 = useRef(null);
    let subTitle2 = useRef(null);
    let slides = useRef(null);
    let description = useRef(null);
    let image = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 1200) {
            if (activeSection === 3) {
                t1.to(title, duration, {opacity: 1, ease: Expo.easeInOut})
                    .to(subTitle1, duration, {opacity: 1, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(subTitle2, duration, {opacity: 1, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(slides, duration, {
                        opacity: 1,
                        x: 0,
                        ease: Expo.easeInOut,
                        delay: duration / 4
                    }, `-=${duration}`)
                    .to(description, duration, {
                        opacity: 1,
                        minHeight: '28rem',
                        height: 'auto',
                        ease: Expo.easeInOut
                    }, `-=${duration * 1.5}`)
                    .to(image, duration, {
                        opacity: 1,
                        height: '18vw',
                        ease: Expo.easeInOut,
                        delay: duration / 4
                    }, `-=${duration * 1.5}`);

            } else {
                t1.to(title, duration, {opacity: 0, ease: Expo.easeInOut})
                    .to(subTitle1, duration, {opacity: 0, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(subTitle2, duration, {opacity: 0, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(slides, duration, {
                        opacity: 0,
                        x: 200,
                        ease: Expo.easeInOut,
                    }, `-=${duration}`)
                    .to(description, duration, {
                        opacity: 0,
                        minHeight: 0,
                        height: 0,
                        ease: Expo.easeInOut
                    }, `-=${duration}`)
                    .to(image, duration, {
                        opacity: 0,
                        height: 0,
                        ease: Expo.easeInOut,
                    }, `-=${duration}`);
            }
        }
    }, [activeSection, width, t1]);

    return (
        <>
            <h2 className={styles.title} ref={el => title = el}>HISTORIA DE LIDERAZGO</h2>
            <p className={styles.subTitle} ref={el => subTitle1 = el}> Hemos mantenido nuestra posición de líder durante
                nuestra trayectoria.</p>
            <p className={styles.subTitle} ref={el => subTitle2 = el}>
                Nuestro origen parte de la visión y experiencia de un selecto grupo de empresarios que han logrado
                cambiar el paisaje urbano de la ciudad de Monterrey, lo que nos ha convertido en una alternativa
                sólida y confiable para inversionistas de bienes raíces.
            </p>
            <div className='wrapperSlider'>
                <div className='smallSlider'>
                    <div className='mainSlides' ref={el => slides = el}>
                        <Swiper {...thumbnailSwiperParams}>
                            <div className='thumbnail' style={{backgroundImage: `url(${image1})`}} />
                            <div className='thumbnail' style={{backgroundImage: `url(${image2})`}} />
                            <div className='thumbnail' style={{backgroundImage: `url(${image3})`}} />
                            <div className='thumbnail' style={{backgroundImage: `url(${image4})`}} />
                            <div className='thumbnail' style={{backgroundImage: `url(${image1})`}} />
                        </Swiper>
                    </div>
                    <div className='singleSlide' ref={el => image = el}>
                        <Swiper  {...gallerySwiperParams}>
                            <div className='gallery' style={{backgroundImage: `url(${image1})`}} />
                            <div className='gallery' style={{backgroundImage: `url(${image2})`}} />
                            <div className='gallery' style={{backgroundImage: `url(${image3})`}} />
                            <div className='gallery' style={{backgroundImage: `url(${image4})`}} />
                            <div className='gallery' style={{backgroundImage: `url(${image1})`}} />
                        </Swiper>
                    </div>
                </div>
                <div className={styles.description} ref={el => description = el}>
                    <Swiper {...descriptionSwiperParams}>
                        {listTitle.map(title =>
                            <div key={title}>
                                <SliderDescription title={title} activeSection={activeSection} />
                            </div>)}
                    </Swiper>
                </div>
            </div>
        </>
    );
};