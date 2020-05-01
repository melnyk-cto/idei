// core
import React, { useEffect, useRef } from 'react';

// library
import { TimelineLite, Expo } from 'gsap'

// assets
import styles from './SliderDescription.module.scss'
import { useScrollPosition, useWindowSize } from "../../../../../hooks";


const duration = 2;
export const SliderDescription = ({position, description}) => {
    const [width] = useWindowSize();
    const [scroll] = useScrollPosition();

    // animation
    let title = useRef(null);
    let listItem = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 1200) {
            if (scroll > (position.offsetTop - 200)) {
                t1.to(title, duration, {opacity: 1, y: 0, ease: Expo.easeInOut})
                    .to(listItem, duration, {opacity: 1, ease: Expo.easeInOut, delay: duration / 4}, `-=${duration}`)
            }
        }
    }, [scroll, position.offsetTop, width, t1]);

    return (
        <div className={styles.inner}>
            <h2 ref={el => title = el}>
                {description.slice(0, 1)}
            </h2>
            <ul ref={el => listItem = el}>{description.slice(1).map((residential) => <li
                key={residential}>{residential}</li>)}
            </ul>
        </div>
    );
};