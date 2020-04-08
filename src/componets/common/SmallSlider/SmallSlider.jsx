// core
import React, { useState, useEffect } from 'react';

// library
import Swiper from "react-id-swiper";

// assets
import 'swiper/swiper.scss'
import './SmallSlider.scss';
import styles from './SmallSlider.module.scss';
import image1 from "../../../assets/images/home/historia-1.jpg";
import image2 from "../../../assets/images/home/historia-2.jpg";
import image3 from "../../../assets/images/home/historia-3.jpg";
import image4 from "../../../assets/images/home/historia-4.jpg";

const residentialList = [
    '2013 - 2016 Torres Céntrika', '2012 - 2016 Los Castaños Private Residential',
    '2012 - 2018 Amorada Private Residential', '2012 - 2017 Balcones de las Mitras IV Sector',
    '2010 - 2014 Catujanes Priv. Residential', '2005 - 2016 Céntrika', '2005 - 2011 Private Aqueduct',
    '2005 - 2011 Hacienda del Carmen', '2004 - 2005 Villa Sierra', '2005 - 2011 The Provinces', '2003 - 2016 Colinas del Valle', '2003 - 2009 Private Los Pinos'];
export const SmallSlider = () => {
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

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
            1640: {
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
        <div className={styles.wrapperSlider}>
            <div className='smallSlider'>
                <div className='mainSlides'>
                    <Swiper {...thumbnailSwiperParams}>
                        <div className='thumbnail' style={{backgroundImage: `url(${image1})`}} />
                        <div className='thumbnail' style={{backgroundImage: `url(${image2})`}} />
                        <div className='thumbnail' style={{backgroundImage: `url(${image3})`}} />
                        <div className='thumbnail' style={{backgroundImage: `url(${image4})`}} />
                        <div className='thumbnail' style={{backgroundImage: `url(${image1})`}} />
                    </Swiper>
                </div>
                <div className='singleSlide'>
                    <Swiper  {...gallerySwiperParams}>
                        <div className='gallery' style={{backgroundImage: `url(${image1})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${image2})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${image3})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${image4})`}} />
                        <div className='gallery' style={{backgroundImage: `url(${image1})`}} />
                    </Swiper>
                </div>
            </div>
            <div className={styles.description}>
                <h2>
                    Residential <br />
                    in horizontal developments
                </h2>
                <ul>{residentialList.map((residential) => <li key={residential}>{residential}</li>)}
                </ul>
            </div>
        </div>
    );
};