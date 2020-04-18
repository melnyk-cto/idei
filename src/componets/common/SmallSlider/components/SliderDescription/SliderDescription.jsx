// core
import React, { useEffect, useRef } from 'react';

// library
import { TimelineLite, Expo } from 'gsap'

// assets
import styles from './SliderDescription.module.scss'
import { useWindowSize } from "../../../../../hooks";


const duration = 2;
export const SliderDescription = ({activeSection ,description}) => {
    const [width] = useWindowSize();

    // animation
    let title = useRef(null);
    let listItem = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 1200) {
            if (activeSection === 3) {
                t1.to(title, duration, {opacity: 1, y: 0, ease: Expo.easeInOut})
                    .to(listItem, duration, {opacity: 1, ease: Expo.easeInOut, delay: duration / 4}, `-=${duration}`)
            } else {
                t1.to(title, duration, {opacity: 0, y: 50, ease: Expo.easeInOut})
                    .to(listItem, duration, {opacity: 0, ease: Expo.easeInOut}, `-=${duration}`)
            }
        }
    }, [activeSection, width, t1]);

    return (
        <div className={styles.inner}>
            <h2 ref={el => title = el}>
                {description.slice(0,1)}
            </h2>
            <ul ref={el => listItem = el}>{description.slice(1).map((residential) => <li
                key={residential}>{residential}</li>)}
            </ul>
        </div>
    );
};