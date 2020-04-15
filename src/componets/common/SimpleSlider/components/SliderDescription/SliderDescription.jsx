// core
import React, { useEffect, useRef } from 'react';

// library
import { Link } from "react-router-dom";
import { TimelineLite, Expo } from 'gsap'

// components
import { useWindowSize } from "../../../../../hooks";

// assets
import styles from './SliderDescription.module.scss';
import republica from "../../../../../assets/images/home/republica.svg";

const duration = 2;
export const SliderDescription = ({activeSection}) => {
    const [width] = useWindowSize();


    // animation
    let firstList = useRef(null);
    let secondList = useRef(null);
    let link = useRef(null);


    const t1 = new TimelineLite();

    useEffect(() => {
        // if (width > 992) {
        // if (activeSection === 2) {
        t1.to(firstList, duration, {opacity: 1, ease: Expo.easeInOut})
            .to(secondList, duration, {opacity: 1, y: 0, ease: Expo.easeInOut, delay: duration / 4}, `-=${duration}`)
            .to(link, duration, {opacity: 1, x: 0, ease: Expo.easeInOut}, `-=${duration}`)


        // }
        // }
    }, [activeSection, width, t1]);
    return (
        <div className={styles.inner}>
            <img src={republica} alt='' />
            <ul className={`${styles.firstList} dashed`} ref={el => firstList = el}>
                <li>236 departamentos de 130 a 832 m2</li>
                <li>Amenidades:</li>
            </ul>
            <ul className={`${styles.secondList} dashed`} ref={el => secondList = el}>
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
            <div className={`${styles.sliderLink} link`} ref={el => link = el}>
                <Link to=''>Ver Projecto</Link>
            </div>
        </div>
    );
};