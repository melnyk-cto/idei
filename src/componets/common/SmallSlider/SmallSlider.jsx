// core
import React, { useState, useEffect, useRef, useCallback } from 'react';

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
import image1 from "../../../assets/images/home/slider/image1.png";
import image2 from "../../../assets/images/home/slider/image2.png";
import image3 from "../../../assets/images/home/slider/image3.png";
import image4 from "../../../assets/images/home/slider/image4.png";
import image5 from "../../../assets/images/home/slider/image5.png";
import image6 from "../../../assets/images/home/slider/image6.png";
import image7 from "../../../assets/images/home/slider/image7.png";

const images = [image1, image2, image3, image4, image5, image6, image7];
const duration = 2;
const descriptionLit = [
    [
        'Residencial en desarrollos horizontales',
        '2013 - 2016 Torres Céntrika', '2012 - 2016 Los Castaños Privada Residencial', '2012 - 2018 Amorada Privada Residencial', '2012 - 2017 Balcones de las Mitras IV Sector', '2005 - 2018 Palmas Diamante y Valbonne Priv. Res.', '2011 - 2016 Balcones Departamentos', '2010 - 2014 Catujanes Priv. Residencial',
        '2005 - 2016 Céntrika', '2005 - 2011 Privada Acueducto', '2005 - 2011 Hacienda del Carmen', '2004 - 2005 Villa Sierra', '2005 - 2011 Las Provincias', '2003 - 2016 Colinas del Valle', '2003 - 2009 Privada los Pinos'
    ],
    [
        'Corporativo y servicios',
        '2013 - 2015 KOI earth offices', '2013 – 2021 Saqqara offices', '2010 - 2012 VAO Oficinas 2', '2007 - 2009 VAO Oficinas', '2007 - 2008 Céntrika Oficinas', '1996 - 1998 Edificio Plaza Internacional',
        '1986 - 1988 Torre Quimmco', '1994 - 1996 Torre ING', '1983 - 1985 Torre Abaco', '1981 - 1983 Torre Alta', '2005 – 2007 Altus Oficinas'
    ],
    [
        'Residencial en desarrollos verticales',
        '2010 - 2012 Cova 2 Departamentos', '2010 - 2012 Eva exclusive vivant', '2010 - 2015 Atria Vertical Living', '2008 - 2009 Cova Departamentos',
        '2001 - 2003 Altus Residencial', '1998 -1999 Torre del Campestre', '1984 - 1985 Torre Cristal'
    ],
    [
        'Turístico',
        '1994 - 1995 Hotel Quinta Real Monterrey',
        '2014 – 2019 Azul Cancún Living'
    ],
    [
        'Proyectos de usos mixtos',
        '2013 - 2017 Saqqara Residences', '2013 - 2016 KOI Sky Residences', '2010 - 2012 Liu Residences East',
        '2009 - 2011 Liu Residences West', '1998 - 2000 Torre Avalanz'
    ],
    [
        'Desarrollos en el extranjero',
        '2002 - 2003 Las Ventanas, Isla del Padre', '1993 Patio Homes Development', '1994 Parc Royale', '1995 – 1997 Yorktown', '1994 La Tour Fountaine', '2000 – 2005 Marina Village', '1997 – 2000 Homewood', '1992 - 1997 Petropark', '1992 - 1998 La Maison at Lakeside', '1990 - 2002 Interbelt North Business Center',
        '1990 - 2000 Lake Cove Seabrook', '1994 – 1997 Central Green', '1976 Centro Comercial Westheimer and Fountainview', '1976 Centro Comercial 8333 Southwest Freeway', '1982 Centro Comercial Meadow Park', '1985 Edificio Richmond 6300', '1980 - 1984 Champions Place', '1979 – 1985 Westlake Place', '1979 - 1989 Thimberhills Subdivision'
    ],
    [
        'Comercial',
        '2005 - 2006 Gran Patio Céntrika', '2005 - 2006 Plaza Comercial Los Pinos',
        '2000 - 2001 Plaza Brisas'
    ],
];

export const SmallSlider = ({activeSection}) => {
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
    };

    const descriptionSwiperParams = {
        getSwiper: getdDescriptionSwiper,
        slidesPerView: 1,
    };

    useEffect(() => {
        if (
            thumbnailSwiper !== null && thumbnailSwiper.controller &&
            descriptionSwiper !== null && descriptionSwiper.controller
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
                            {images.map(image =>
                                <div key={image} className='thumbnail' style={{backgroundImage: `url(${image})`}} />)}
                        </Swiper>
                    </div>
                    <div className='singleSlide' ref={el => image = el}>
                        <Swiper  {...gallerySwiperParams}>
                            {images.map(image =>
                                <div key={image} className='gallery' style={{backgroundImage: `url(${image})`}} />)}
                        </Swiper>
                    </div>
                </div>
                <div className={styles.description} ref={el => description = el}>
                    <Swiper {...descriptionSwiperParams}>
                        {descriptionLit.map(description =>
                            <div key={description}>
                                <SliderDescription activeSection={activeSection} description={description} />
                            </div>)}
                    </Swiper>
                </div>
            </div>
        </>
    );
};