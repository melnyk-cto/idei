// core
import React, { useState } from 'react';

// library
import Swiper from "react-id-swiper";

// image
import recentImage from "../../../assets/images/home/recent-project-1.png";

// styles
import 'swiper/swiper.scss'
import './SimpleSlider.scss';

export const SimpleSlider = () => {

    const [swiper, updateSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

    return (
        <div className='slider'>
            <Swiper getSwiper={updateSwiper}>
                <div className='item'><img src={recentImage} alt='' /></div>
                <div className='item'><img src={recentImage} alt='' /></div>
                <div className='item'><img src={recentImage} alt='' /></div>
                <div className='item'><img src={recentImage} alt='' /></div>
            </Swiper>
            <button onClick={goPrev}>Prev</button>
            <button onClick={goNext}>Next</button>
        </div>
    );
};