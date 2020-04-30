// core
import React, { useState, useEffect, useRef, useCallback } from 'react';

// library
import Swiper from "react-id-swiper";
import { TimelineLite, Expo } from 'gsap'

// components
import { SliderDescription } from "./components/SliderDescription/SliderDescription";
import { useWindowSize } from "../../../hooks";

// image
import kanat from "../../../assets/images/home/simple-slider/kanat.jpg";
import logoKanat from "../../../assets/images/home/simple-slider/kanat.svg";
import kima from "../../../assets/images/home/simple-slider/kima.jpg";
import logoKima from "../../../assets/images/home/simple-slider/kima.svg";
import koi from "../../../assets/images/home/simple-slider/koi.jpg";
import logokoi from "../../../assets/images/home/simple-slider/koi.svg";
import reppublica from "../../../assets/images/home/simple-slider/reppublica.jpg";
import logoReppublica from "../../../assets/images/home/simple-slider/reppublica.svg";
import saqqara from "../../../assets/images/home/simple-slider/saqqara.jpg";
import logoSaqqara from "../../../assets/images/home/simple-slider/saqqara.svg";

// styles
import 'swiper/swiper.scss'
import './SimpleSlider.scss';
import styles from "./SimpleSlider.module.scss";

const duration = 2;
const data = [
    {
        id: 0, logo: logoKanat, image: kanat,
        list: ['Altura libre de 2.80m', 'Preparación minisplit', 'Detectores de humo', 'Planta de emergencia',
            'Control de accesos', 'Seguridad 24/7', 'Departamentos de 60m2 a 91m2 con acabados', 'Cocina equipada',
            'Fachada de block de concreto celular aislante', 'Iluminación LED', 'Puerta principal'],
        link: 'http://kanat.mx/'
    },
    {
        id: 1,
        logo: logoKima,
        image: kima,
        list: ['Altura libre 2.90m', 'Minisplits con instalaciones bajo plafón',
            'Baños equipados con lavaneta y espejos', 'Iluminación LED', 'Planta de emergencia', 'Control de accesos',
            'Seguridad 24/7', 'Departamentos de 82m2 a 107m2', 'IAARQ Diseño Arquitectónico', 'Salón de eventos',
            'Dog park', 'Juegos infantiles'],
        link: 'http://kima.idei.com.mx/'
    },
    {
        id: 2,
        logo: logokoi,
        image: koi,
        list: ['Certificación LEED Plata', 'Botón de emergencia de rápida respuesta', 'Preparación para sistema inteligente',
            '24,300 m2 de áreas verdes, andadores y espejos de agua', 'RWDI (estudios de vientos)',
            'Thornton Tomasetti y Stark + Ortiz ( Ingeniería Estructural)', 'Eco SYNC Asesoría LEED',
            'Departamentos de 130m2 a 832 m2', 'Altura libre de 3.20m', 'Línea de agua purificada'],
        link: 'http://koi.mx/'
    },
    {
        id: 3,
        logo: logoReppublica,
        image: reppublica,
        list: ['Miró Rivera + IAARQ Diseño Arquitectónico', 'Comercio 2 plantas',
            'Oficinas de 58 a 2,474.9 m2', 'Departamentos de 55 a 82 m2', 'Ventanas Duovent',
            'Minisplits con instalaciones bajo plafón', 'Iluminación LED', 'Planta de emergencia', 'Control de accesos',
            'Seguridad 24/7', 'Baños equipados con lavaneta y espejos'],
        link: 'http://republica.idei.com.mx/'
    },
    {
        id: 4,
        logo: logoSaqqara,
        image: saqqara,
        list: ['Altura libre 3.15 m', 'Sistema de aire acondicionado distrital',
            'Lobby', 'Concierge', 'Salas de choferes', 'Botón de emergencia de rápida respuesta',
            'Preparación para sistema inteligente', 'Certificación LEED plata', 'Iluminación LED',
            'Planta de emergencia', 'Control de accesos', 'Seguridad 24/7', 'Departamentos de 111m2 a 615m2'],
        link: 'http://saqqara.mx/'
    },
];
export const SimpleSlider = ({activeSection}) => {
    const [width] = useWindowSize();

    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
    const [descriptionSwiper, getdDescriptionSwiper] = useState(null);
    const [currentIndex, updateCurrentIndex] = useState(null);

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
            thumbnailSwiper !== null && thumbnailSwiper.controller
            && descriptionSwiper !== null && descriptionSwiper.controller
        ) {
            descriptionSwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = [descriptionSwiper];
        }


    }, [thumbnailSwiper, descriptionSwiper]);


    // get active slide
    const updateIndex = useCallback(() => {
        updateCurrentIndex(thumbnailSwiper.activeIndex);
    }, [thumbnailSwiper]);

    // Add event listeners for Swiper after initializing and control gallerySwiper
    useEffect(() => {
        if (thumbnailSwiper !== null && gallerySwiper !== null) {
            thumbnailSwiper.on("slideChange", updateIndex);
            gallerySwiper.slideTo(currentIndex);
        }
    }, [thumbnailSwiper, gallerySwiper, updateIndex, currentIndex]);

    // animation
    let title = useRef(null);
    let slides = useRef(null);
    let description = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 1200) {
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
                    {data.map(item =>
                        <div key={item.id} className='thumbnail' style={{backgroundImage: `url(${item.image})`}} />
                    )}
                </Swiper>
                <div className='only-mobile'>
                    <Swiper  {...gallerySwiperParams}>
                        {data.map(item =>
                            <div key={item.id} className='gallery' style={{backgroundImage: `url(${item.image})`}} />
                        )}
                    </Swiper>
                </div>
            </div>
            <div className={styles.description} ref={el => description = el}>
                <Swiper {...descriptionSwiperParams}>
                    {data.map(item =>
                        <div key={item.id}>
                            <SliderDescription activeSection={activeSection} item={item} />
                        </div>)}
                </Swiper>
            </div>

        </>
    );
};