// core
import React, { useEffect, useRef } from 'react';

// library
import { TimelineLite, Expo } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../../../hooks";

// assets
import styles from './SliderDescription.module.scss';

const duration = 2;
export const SliderDescription = ({position, item}) => {
    const [width] = useWindowSize();

    const [scroll] = useScrollPosition();

    // animation
    let secondList = useRef(null);
    let link = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (scroll > (position.offsetTop - 200)) {
            t1.to(secondList, duration, {
                opacity: 1,
                y: 0,
                ease: Expo.easeInOut,
                delay: duration / 4
            }, `-=${duration}`)
                .to(link, duration, {opacity: 1, x: 0, ease: Expo.easeInOut})
        }
    }, [scroll, position.offsetTop, width, t1]);
    return (
        <div className={styles.inner}>
            <img src={item.logo} alt='' />
            <ul className={`${styles.secondList} dashed`} ref={el => secondList = el}>
                {item.list.map(list =>
                    <li key={list}>{list}</li>
                )}
            </ul>
            <div className={`${styles.sliderLink} link`} ref={el => link = el}>
                <a href={item.link} target='_blank' rel="noopener noreferrer">Ver Proyecto</a>
            </div>
        </div>
    );
};