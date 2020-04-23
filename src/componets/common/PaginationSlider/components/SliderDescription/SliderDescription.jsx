// core
import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

// library
import { TimelineLite, Expo } from 'gsap'

// components
import { useWindowSize } from "../../../../../hooks";
import styles from "./SliderDescription.module.scss";

const duration = 2;
export const SliderDescription = ({activeSection}) => {
    const [width] = useWindowSize();

    // animation
    let firstList = useRef(null);
    let secondList = useRef(null);
    let link = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 1200) {
            if (activeSection === 1) {
                t1.to(firstList, duration, {opacity: 1, ease: Expo.easeInOut})
                    .to(secondList, duration, {
                        opacity: 1,
                        y: 0,
                        ease: Expo.easeInOut,
                        delay: duration / 8
                    }, `-=${duration}`)
                    .to(link, duration, {opacity: 1, x: 0, ease: Expo.easeInOut}, `-=${duration}`)
            } else {
                t1.to(firstList, duration, {opacity: 0, ease: Expo.easeInOut})
                    .to(secondList, duration, {
                        opacity: 0,
                        y: 60,
                        ease: Expo.easeInOut,
                    }, `-=${duration}`)
                    .to(link, duration, {opacity: 0, x: -120, ease: Expo.easeInOut}, `-=${duration}`)

            }
        }
    }, [activeSection, width, t1]);
    return (
        <>
            <h2>
                BALCONES DE LAS MITRAS
            </h2>
            <ul className={styles.firstList} ref={el => firstList = el}>
                <li>- Departamentos con espacios naturales</li>
                <li>- Acceso controlado</li>
            </ul>
            <p className={styles.secondList} ref={el => secondList = el}>
                La gran vista panorámica que se aprecia desde , se suma al placer de vivir al poniente de la ciudad de
                Monterrey
            </p>
            <div className={`${styles.sliderLink} link tc`} ref={el => link = el}>
                <Link to='' target='_blank'>Ver Proyecto</Link>
            </div>
        </>
    );
};