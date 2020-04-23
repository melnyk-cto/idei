// core
import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

// library
import { TimelineLite, Expo } from 'gsap'

// components
import { useWindowSize } from "../../../../../hooks";
import styles from "./SliderDescription.module.scss";

const duration = 2;
export const SliderDescription = ({activeSection, item}) => {
    const [width] = useWindowSize();

    // animation
    let secondList = useRef(null);
    let link = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 1200) {
            if (activeSection === 1) {
                t1.to(secondList, duration, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeInOut,
                    delay: duration / 8
                }, `-=${duration}`)
                    .to(link, duration, {opacity: 1, x: 0, ease: Expo.easeInOut}, `-=${duration}`)
            } else {
                t1.to(secondList, duration, {
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
            <ul className={`${styles.secondList} dashed`} ref={el => secondList = el}>
                {item.list.map(item =>
                    <li key={item}>{item}</li>
                )}
            </ul>
            <div className={`${styles.sliderLink} link tc`} ref={el => link = el}>
                <Link to={item.link} target='_blank' rel="noopener noreferrer">Ver Proyecto</Link>
            </div>
        </>
    );
};