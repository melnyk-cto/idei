// core
import React, { useState, useEffect, useRef } from 'react';

// library
import Swiper from "react-id-swiper";
import { TimelineLite, Expo } from 'gsap'

// components
import { useWindowSize } from "../../../../hooks";
import { SliderDescription } from "./components/SliderDescription/SliderDescription";

// image
import logo from "../../../../assets/images/comercial/comercial-logo.svg";
import vao2 from "../../../../assets/images/comercial/slider/vao2.jpg";
import koi from "../../../../assets/images/comercial/slider/koi.jpg";
import republica from "../../../../assets/images/comercial/slider/republica.jpg";
import kio from "../../../../assets/images/comercial/slider/kio.jpg";

// styles
import 'swiper/swiper.scss'
import './VerticalSlider.scss';
import styles from "./components/SliderDescription/SliderDescription.module.scss";

const data = [
    {
        id: 0,
        title: 'EVA',
        subTitle: '(Exclusive vivant)',
        image: vao2,
        characteristics: ['24 departamentos de lujo', 'Desde 265 m2 hasta 580 m2.'],
        amenities: [],
        location: ['San Pedro Garza García N.L.'],
    },
    {
        id: 1,
        title: 'KOI',
        subTitle: 'Tu vida en las alturas',
        image: koi,
        characteristics: ['Certificación Leed Plata', 'Botón de emergencia de rápida respuesta', 'Preparación para sistema inteligente',
            '24,300 m2 de áreas verdes, andadores y espejos de agua', 'RWDI (Estudios de Vientos)', 'Thornton Tomasetti y Stark + Ortiz ( Ingeniería Estructural)',
            'Eco SYNC Asesoría LEED', 'Departamentos de 130m2 a 832 m2'],
        amenities: ['Salas de visitas privadas', 'Sala de cine', 'Salón de juegos', 'Salón de eventos', '2 suites de huéspedes',
            'Gimnasio', 'Sauna y baños de vapor', 'Alberca infinity semiolimpica con doble carril de nado', 'Jacuzzi'],
        location: ['San Pedro Garza García N.L.'],
    },
    {
        id: 2,
        title: 'SAQQARA',
        subTitle: '(Los nuevos limites de la arquitectura)',
        image: vao2,
        characteristics: ['Altura libre 3.15 m', 'Sistema de aire acondicionado distrital', 'Lobby', 'Cocierge', 'Salas de choferes',
            'Botón de emergencia de rápida respuesta', 'Preparación para sistema inteligente', 'Certificación leed plata',
            'Iluminación led'],
        amenities: ['2 salones de eventos', '2 gimnasios', '2 spas y baños de vapor', 'Alberca, jacuzzi y alberca para niños', '2 business center',
            'Juegos infantiles', "2 business center", '3 salones de niños'],
        location: ['San Pedro Garza García N.L.'],
    },
    {
        id: 2,
        title: 'KIMA',
        subTitle: '(Tu hogar en el universo)',
        image: kio,
        characteristics: ['Altura libre 2.90', 'Minisplits con instalaciones bajo plafón', 'Baños equipados con lavaneta y espejos',
            'Planta de emergencia', 'Control de accesos', 'Seguridad 24/7', 'Departamentos de 82m2 a 107m2', 'IAARQ Diseño Arquitectónico'],
        amenities: ['Dog park', 'Centro culinario', 'Salón de eventos', 'Gimnasio exterior', 'Gimnasio interior', 'Cine en el parque',
            'Área de asadores', 'Simulador virtual de golf', 'Pies descalzos', 'Juegos infantiles', 'Área deportiva'],
        location: ['Santa Catarina N.L.'],
    },
    {
        id: 3,
        title: 'KANAT',
        subTitle: '(Lo mejor es tu hogar)',
        image: vao2,
        characteristics: ['Altura libre de 2.80m', 'Preparación minisplit', 'Detectores de humo', 'Planta de emergencia', 'Control de accesos',
            'Seguridad 24/7', 'Departamentos de 60m2 a 91m2 con acabados', 'Cocina equipada'],
        amenities: ['Áreas verdes', 'Asadores', 'Fogateros', 'Dog Park', 'Juegos infantiles', 'Yoga', 'Pies descalzos',
            'Sala de visitas formal', 'Sala de visitas lounge', 'Sport Bar', 'Salón de eventos'],
        location: ['Santa Catarina N.L.'],
    },
    {
        id: 4,
        title: 'REPÚBLICA',
        subTitle: '(El nuevo punto de unión)',
        image: republica,
        characteristics: ['Miró Rivera + IAARQ Diseño', 'Arquitectónico', 'Comercio 2 plantas', 'Oficinas de 58 a 2,474.9 m2',
            'Departamentos de 55 a 82 m2', 'Ventanas Duovent', 'Minisplits con instalaciones bajo plafón', 'Iluminación led',
            'Planta de emergencia', 'Control de accesos'],
        amenities: ['Oficinas: Co Work y salas de juntas', 'Alberca', 'Simlulador de base ball', 'Asadores', 'Centro Culinario',
            'Sports Bar', 'Juegos Infantiles', 'Gimnasio'],
        location: ['Monterrey N.L.'],
    },
    {
        id: 5,
        title: 'NOVUS',
        subTitle: '(Mi nuevo Fundidora)',
        image: vao2,
        characteristics: ['Puerta principal e interiores', 'Cocina equipada', 'Iluminación LED', 'Altura libre de 2.80m',
            'Aire acondicionado Fan & Coil', 'Detección de humo y extinción de incendios', 'Baños equipados',
            'Departamentos de 53m2 y 113m2'],
        amenities: ['Parque fundidora', '2 Albercas', 'Áreas verdes', 'Asadores', 'Centro culinario', 'Salón de eventos',
            'Sports bar', 'Ludoteca', 'Gimnasio'],
        location: ['Monterrey N.L.'],
    },
    {
        id: 6,
        title: 'UNA',
        subTitle: '',
        image: vao2,
        characteristics: ['Departamentos de 50 a 92m2', 'Minisplits', 'Iluminación led', 'Planta de emergencia', 'Control de accesos',
            'Seguridad 24/7', 'Baños equipados con lavaneta y espejos'],
        amenities: ['Alberca', 'Asadores', 'Gimnasio', 'Co Work', 'Sports Bar', 'Sports Bar'],
        location: ['Sports Bar'],
    },
    {
        id: 7,
        title: 'VALLE ORIENTE',
        subTitle: '',
        image: vao2,
        characteristics: [],
        amenities: [],
        location: ['San Pedro Garza García N.L.'],
    },
    {
        id: 8,
        title: 'ÁVALON',
        subTitle: '',
        image: vao2,
        characteristics: ['Altura libre de 2.80m', 'Detección y extinción', 'Planta de emergencia', 'Control de accesos',
            'Control de accesos', 'Ventanas duovent', 'Departamentos de 80m2 a 109m2', 'Cocina equipada', 'Fachada de block de concreto celular aislante',
            'Iluminación LED', 'Puertas exterior e interior'],
        amenities: ['Jardín ZEN', 'Asadores', 'Fogateros', 'Área de mascotas', 'Juegos infantiles exteriores', 'Sala interior de Yoga',
            'Pies descalzos', 'Sala de visitas formal', 'Sala de visitas lounge'],
        location: ['Monterrey N.L.'],
    },
];
const duration = 2;
export const VerticalSlider = ({activeSection}) => {
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
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 992px
            992: {
                spaceBetween: 160,
                slidesPerView: 1,
                slideToClickedSlide: false,
                // loop: true,
            }
        }
    };

    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        slidesPerView: 1,
        spaceBetween: 33,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 992px
            992: {
                spaceBetween: 30,
                slidesPerView: 3,
                centeredSlides: true,
                slideToClickedSlide: true,
            }
        }
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
            <div className={`${styles.description} commercialSliderDescription`} ref={el => description = el}>
                <Swiper {...descriptionSwiperParams}>
                    {data.map(item =>
                        <div key={item.id}>
                            <SliderDescription activeSection={activeSection} item={item} />
                        </div>)}
                </Swiper>
            </div>
            <div className='commercialSlider' ref={el => slides = el}>
                <img src={logo} alt='logo' />
                <Swiper {...thumbnailSwiperParams}>
                    {data.map(item =>
                        <div key={item.id} className='thumbnail' style={{backgroundImage: `url(${item.image})`}} />
                    )}
                </Swiper>
                <div className='commercialSliderGallery'>
                    <Swiper  {...gallerySwiperParams}>
                        {data.map(item =>
                            <div key={item.id} className='gallery' style={{backgroundImage: `url(${item.image})`}} />
                        )}
                    </Swiper>
                </div>
            </div>
        </>
    );
};