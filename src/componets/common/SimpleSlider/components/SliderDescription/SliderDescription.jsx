// core
import React, { useEffect, useRef } from 'react';

// library
import { TimelineLite, Expo } from 'gsap'

// components
import { useWindowSize } from "../../../../../hooks";

// assets
import styles from './SliderDescription.module.scss';

const duration = 2;
export const SliderDescription = ({activeSection, item}) => {
    const [width] = useWindowSize();

    // animation
    let secondList = useRef(null);
    let link = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 1200) {
            if (activeSection === 2) {
                t1.to(secondList, duration, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeInOut,
                    delay: duration / 4
                }, `-=${duration}`)
                    .to(link, duration, {opacity: 1, x: 0, ease: Expo.easeInOut})
            } else {
                t1.to(secondList, duration, {
                    opacity: 0,
                    y: 60,
                    ease: Expo.easeInOut,
                })
                    .to(link, duration, {opacity: 0, x: -120, ease: Expo.easeInOut})

            }
        }
    }, [activeSection, width, t1]);
    return (
        <div className={styles.inner}>
            <img src={item.logo} alt='' />
            <ul className={`${styles.secondList} dashed`} ref={el => secondList = el}>
                {item.list.map(list =>
                    <li key={list}>{list}</li>
                )}
            </ul>
            <div className={`${styles.sliderLink} link`} ref={el => link = el}>
                <a href={item.link} target='_blank' rel="noopener noreferrer" >Ver Proyecto</a>
            </div>
        </div>
    );
};