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
import auriga from "../../../../assets/images/comercial/slider/auriga.jpg";
import citica from "../../../../assets/images/comercial/slider/citica.jpg";
import republica from "../../../../assets/images/comercial/slider/republica.jpg";
import centrika from "../../../../assets/images/comercial/slider/centrika.jpg";
import kio from "../../../../assets/images/comercial/slider/kio.jpg";
import torreAmerica from "../../../../assets/images/comercial/slider/torre-america.jpg";

// styles
import 'swiper/swiper.scss'
import './CommercialSlider.scss';
import styles from "./components/SliderDescription/SliderDescription.module.scss";

const data = [
    {
        id: 0,
        title: 'VAO 2',
        subTitle: '',
        image: vao2,
        characteristics: ['Ubicación privilegiada, corredor Valle Oriente accesos viales y trasporte',
            'Lujo, arte y vanguardia en áreas comunes', '18 niveles de Oficinas',
            'Respaldo eléctrico 100%, plantas de emergencia para respaldar funcionamiento al 100% en áreas comunes y privadas',
            'Procedimiento de seguridad con tarjetas de acceso ', '4 elevadores más 1 de carga', 'Bodegas disponibles para renta'],
        amenities: ['Enfermería, para todos los usuarios del complejo', 'Business center, salas de juntas y áreas de visita ubicado en el piso 7',
            'Tiendas de conveniencia y restaurantes ubicados en el nivel de Plaza', 'Salón de eventos con capacidad de 600 personas',
            'Comedor común para empleados'],
        privateAreas: ['Espacios en obra gris', 'Servicios a pie de local', 'Espacios a partir de 100m2', 'Manejadores incluidas tipo Chillers, 24hrs al dia AC',
            'Estacionamiento tipo Pool 1 cajón cada 23m2 '],
    },
    {
        id: 1,
        title: 'KOI Oficinas',
        subTitle: '',
        image: koi,
        characteristics: ['Edificio más alto de México', 'Ubicación privilegiada, Corredor Valle Oriente accesos viales y trasporte',
            'Lujo, Arte y Vanguardia en áreas comunes', 'Certificación LEED Plata', '20 pisos de Oficinas más 4 PHs con vistas panorámicas',
            'Respaldo Eléctrico 100%, plantas de emergencia para respaldar funcionamiento al 100% en áreas comunes y privadas',
            'Procedimiento de Seguridad con tarjetas de acceso', '4 elevadores más 1 de carga'],
        amenities: ['Enfermería, para todos los usuarios del complejo', 'Tiendas de conveniencia y Restaurantes ubicados en el nivel de Plaza',
            'Salón de eventos con capacidad de 600 personas'],
        privateAreas: ['Espacios en Obra Gris', 'Servicios a Pie de Local', 'Espacios a partir de 200m2', 'Manejadores incluidas tipo VRF 24hrs al dia AC',
            'Estacionamiento tipo Pool 1 cajón cada 23m2 '],
    },
    {
        id: 2,
        title: 'AURIGA Oficinas',
        subTitle: '(próximamente, otoño 2020)',
        // logo: logoAysso,
        image: auriga,
        characteristics: ['Ubicación privilegiada, corredor Valle Oriente accesos viales y trasporte', 'Lujo, arte y vanguardia en áreas comunes',
            '8 niveles de oficinas', 'Cogeneración: el proyecto generará su propia energía', 'Respaldo eléctrico por CFE en caso de emergencia',
            'Procedimiento de seguridad con tarjetas de acceso', '3 elevadores más 1 de carga'],
        amenities: ['Centro comercial high end', 'Hotel de lujo de 300 llaves', 'Restaurantes y tiendas de conveniencia a pie de local'],
        privateAreas: ['Espacios en obra gris', 'Servicios a pie de local', 'Espacios a partir de 500m2', 'Agua helada a pie de local',
            'Estacionamiento tipo Pool 1 cajón cada 23m2 '],
    },
    {
        id: 3,
        title: 'CITICA Oficinas',
        subTitle: '',
        image: citica,
        characteristics: ['Ubicación privilegiada en 2 de las avenidas con mayor flujo en el corazón de Monterrey',
            'Fácil acceso, a minutos de San Pedro, Garza Garcia', 'Procedimiento de seguridad con tarjetas de acceso ',
            '7 pisos de oficinas', '9 niveles inferiores de estacionamiento techado', '3 elevadores más 1 de carga'],
        amenities: ['Tiendas de conveniencia y restaurantes ubicados en el nivel de Plaza', 'Comedor común para empleados', 'Gimnasio a nivel de plaza'],
        privateAreas: ['Espacios en Obra Gris', 'Servicios a Pie de Local', 'Espacios a partir de 100m2', 'Estacionamiento tipo Pool 1 cajón cada 25m2 '],
    },
    {
        id: 4,
        title: 'República Oficinas',
        subTitle: '(próximamente, otoño 2021)',
        image: republica,
        characteristics: ['Ubicación privilegiada en 2 de las avenidas con mayor flujo en el corazón de Monterrey',
            'Procedimiento de seguridad con tarjetas de acceso', '6 pisos de oficinas', '7 niveles inferiores de estacionamiento techado',
            '3 elevadores más 1 de carga'],
        amenities: ['Business center, salas de juntas y áreas de visita', 'Tiendas de conveniencia y restaurantes ubicados en el nivel de Plaza',
            'Comedor y terraza común para empleados'],
        privateAreas: ['Espacios en Obra Gris', 'Servicios a Pie de Local', 'Manejadores incluidas tipo VRF 24hrs al dia AC',
            'Espacios a partir de 200m2', 'Estacionamiento tipo Pool 1 cajón cada 27m2 '],
    },
    {
        id: 5,
        title: 'Centrika Oficinas',
        subTitle: '',
        image: centrika,
        characteristics: ['Ubicado en el corazón del área Metropolitana de Monterrey', 'Fácil acceso, a una cuadra de la ecovia y a 200 m de la estación de metro Anaya',
            'Procedimiento de seguridad con tarjetas de acceso', '3 pisos de oficinas con amplias plantas',
            '2 niveles inferiores de estacionamiento techado', '3 elevadores'],
        amenities: ['Nuestro gran proyecto Céntrika cuenta con un Centro Comercial mismo que tiene tiendas de autoservicio, salas de cine, restaurantes, tiendas departamentales, además de un gran número de tiendas de prestigio.'],
        privateAreas: ['Espacios en obra gris', 'Servicios a pie de local', 'Espacios a partir de 200m2',
            'Estacionamiento tipo Pool 1 cajón cada 17.5m2'],
    },
    {
        id: 6,
        title: 'KIO',
        subTitle: '',
        image: kio,
        characteristics: ['Ubicación corporativa y comercial sobre Gomez Morín', 'Edificio Icono de Monterrey, por su forma semi circular',
            '8 pisos de oficinas', 'Procedimiento de seguridad con tarjetas de acceso', '3 elevadores más 1 de carga'],
        amenities: ['En un radio de 150 mts., distancia que se puede recorrer a pie, se encuentran: Palacio de Hierro, Cines, Food Court, Restaurantes, HEB, Bancos, Tintorería, Plaza 404, Starbucks, etc.',
            'Vías rápidas de acceso: Ave. Vasconcelos, Ave. Ricardo Margáin y Ave. Gómez Morín.', 'Cerca de estaciones de transporte público'],
        privateAreas: ['Espacios Acondicionados', 'Locales a partir de 100m2', 'Estacionamientos exclusivos'],
    },
    {
        id: 7,
        title: 'TORRE COMERCIAL AMÉRICA',
        subTitle: '',
        image: torreAmerica,
        characteristics: ['Ubicación corporativa y comercial en San Pedro', 'Edificio corporativo icono de Monterrey',
            '30 pisos de oficinas', 'Procedimiento de seguridad con tarjetas de acceso', '7 elevadores más 1 de carga'],
        amenities: ['En un radio de 50 mts, que se pueden recorrer a pie se encuentra Plaza Fiesta San Agustin, Main Entrance, Hotel Quinta Real, Hotel Safi, Metropolitan, Hospital Zambrano Hellion.',
            'Vías rápidas de acceso: Lázaro Cárdenas, Vasconcelos, Calzada del Valle.', 'Cerca de estaciones de transporte público'],
        privateAreas: ['Espacios Acondicionados', 'Locales a partir de 100m2', 'Estacionamientos exclusivos'],
    },
];
const duration = 2;
export const CommercialSlider = ({activeSection}) => {
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