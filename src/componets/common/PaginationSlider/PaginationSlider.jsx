// core
import React, { useState, useEffect, useRef } from 'react';

// library
import Swiper from "react-id-swiper";
import { TimelineLite, Expo } from 'gsap'

// components
import { useWindowSize } from "../../../hooks";
import { SliderDescription } from "./components/SliderDescription/SliderDescription";

// image
import logo from "../../../assets/images/trazzo-logo.svg";
import plata from "../../../assets/images/trazzo/paginationSlider/valle-plata.jpg";
import logoPlata from "../../../assets/images/trazzo/paginationSlider/plata.png";
import platino from "../../../assets/images/trazzo/paginationSlider/centrika-platino.jpg";
import logoPlatino from "../../../assets/images/trazzo/paginationSlider/platino.png";
import aysso from "../../../assets/images/trazzo/paginationSlider/aysso.jpg";
import logoAysso from "../../../assets/images/trazzo/paginationSlider/aysso.png";
import toronto from "../../../assets/images/trazzo/paginationSlider/estancias-toronto.jpg";
import logoToronto from "../../../assets/images/trazzo/paginationSlider/toronto.png";
import huinala from "../../../assets/images/trazzo/paginationSlider/centrica-huinala.jpg";
import logoHuinala from "../../../assets/images/trazzo/paginationSlider/huinala.png";
import mitras from "../../../assets/images/trazzo/paginationSlider/balcones-mitras.jpg";
import logoMitras from "../../../assets/images/trazzo/paginationSlider/mitras.png";

// styles
import 'swiper/swiper.scss'
import './PaginationSlider.scss';
import styles from "./components/SliderDescription/SliderDescription.module.scss";

const data = [
    {
        id: 0,
        title: 'VALLE DE PLATA',
        logo: logoPlata,
        image: plata,
        list: ['Casas de 3 Recamaras', 'Casas de 2 y 3 niveles', 'Casa Club', 'Alberca', 'Áreas verdes', 'Acceso Controlado '],
        link: 'http://estanciasvalledeplata.pagedemo.co/'
    },
    {
        id: 1,
        title: 'CÉNTRIKA PLATINUM',
        logo: logoPlatino,
        image: platino,
        list: ['2 y 3 recámaras', '9 pisos', '2 torres', 'Gimnasio', 'Salón de eventos', 'Alberca', 'Área Pet Friendly', 'Estacionamiento Techado'],
        link: 'http://centrikaplatinum.pagedemo.co/'
    },
    {
        id: 2,
        title: 'AYSSO',
        logo: logoAysso,
        image: aysso,
        list: ['Desarrollo urbanizado', 'Lotes desde 250 m2', 'Instalaciones subterráneas', 'Casa Club', 'Alberca', 'Cañada natural.', '30,000 m2 de áreas verdes.'],
        link: 'http://aysso.pagedemo.co/'
    },
    {
        id: 3,
        title: 'ESTANCIAS TORONTO',
        logo: logoToronto,
        image: toronto,
        list: ['Casas de 3 recámaras', 'Casas de 2 y 3 niveles', 'Casa club con terraza', 'Alberca', 'Áreas verdes', 'Acceso controlado'],
        link: 'http://estanciastoronto.pagedemo.co/'
    },
    {
        id: 4,
        title: 'CÉNTRIKA HUINALÁ',
        logo: logoHuinala,
        image: huinala,
        list: ['Casas de 3 recámaras', 'Casas de 2 niveles', 'Caseta de vigilancia', 'Parque', 'Juegos infantiles', 'Centro comercial'],
        link: 'http://centrikahuinala.pagedemo.co/'
    },
    {
        id: 5,
        title: 'BALCONES DE LAS MITRAS',
        logo: logoMitras,
        image: mitras,
        list: ['Departamento\ts de 2 recámaras', 'Casas de 2 recámaras', 'Caseta de vigilancia ', 'Alberca', 'Servicios Subterráneos', 'Palapa', 'Lectura'],
        link: 'http://balconesdelasmitras.pagedemo.co/'
    },
];
const duration = 2;
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
                {data.map((item, index) =>
                    <li key={item.id}
                        onClick={() => goToSlide(index)}
                        className={index === active ? 'pagination-list active' : 'pagination-list'}>{item.title}</li>
                )}
            </ul>
            <div className='sliderPagination' ref={el => slides = el}>
                <img src={logo} alt='logo' />
                <Swiper {...thumbnailSwiperParams}>
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
            <div className={`${styles.description} sliderPaginationDescription`} ref={el => description = el}>
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