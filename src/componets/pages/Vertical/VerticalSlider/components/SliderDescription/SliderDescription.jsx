// core
import React, { useEffect, useRef } from 'react';

// library
import { TimelineLite, Expo } from 'gsap'

// components
import { useWindowSize } from "../../../../../../hooks";
import styles from "./SliderDescription.module.scss";

const duration = 2;
export const SliderDescription = ({activeSection, item}) => {
    const [width] = useWindowSize();

    // animation
    let firstList = useRef(null);
    let secondList = useRef(null);
    let thirdList = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 1200) {
            if (activeSection === 1) {
                t1.to(firstList, duration, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeInOut,
                    delay: duration / 8
                }, `-=${duration}`)
                    .to(secondList, duration, {
                        opacity: 1,
                        y: 0,
                        ease: Expo.easeInOut,
                        delay: duration / 8
                    }, `-=${duration}`)
                    .to(thirdList, duration, {
                        opacity: 1,
                        y: 0,
                        ease: Expo.easeInOut,
                        delay: duration / 8
                    }, `-=${duration}`)
            } else {
                t1.to(firstList, duration, {
                    opacity: 0,
                    y: 60,
                    ease: Expo.easeInOut,
                }, `-=${duration}`)
                    .to(secondList, duration, {
                        opacity: 0,
                        y: 60,
                        ease: Expo.easeInOut,
                    }, `-=${duration}`)
                    .to(thirdList, duration, {
                        opacity: 0,
                        y: 60,
                        ease: Expo.easeInOut,
                    }, `-=${duration}`)
            }
        }
    }, [activeSection, width, t1]);
    return (
        <>
            <h2>{item.title} <span>{item.subTitle}</span></h2>
            <div>
                <h3>Características</h3>
                <ul className={`${styles.secondList} dashed`} ref={el => firstList = el}>
                    {item.characteristics.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
            <div>
                <h3>Amenidades:</h3>
                <ul className={`${styles.secondList} dashed`} ref={el => secondList = el}>
                    {item.amenities.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
            <div>
                <h3>Ubicación:</h3>
                <ul className={`${styles.secondList} dashed`} ref={el => thirdList = el}>
                    {item.location.map(item =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>

        </>
    );
};