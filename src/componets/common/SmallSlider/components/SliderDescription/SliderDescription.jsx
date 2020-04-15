// core
import React, { useEffect, useRef } from 'react';

// library
import { TimelineLite, Expo } from 'gsap'

// assets
import styles from './SliderDescription.module.scss'
import { useWindowSize } from "../../../../../hooks";


const duration = 2;
const residentialList = [
    '2013 - 2016 Torres Céntrika', '2012 - 2016 Los Castaños Private Residential',
    '2012 - 2018 Amorada Private Residential', '2012 - 2017 Balcones de las Mitras IV Sector',
    '2010 - 2014 Catujanes Priv. Residential', '2005 - 2016 Céntrika', '2005 - 2011 Private Aqueduct',
    '2005 - 2011 Hacienda del Carmen', '2004 - 2005 Villa Sierra', '2005 - 2011 The Provinces', '2003 - 2016 Colinas del Valle', '2003 - 2009 Private Los Pinos'];
export const SliderDescription = ({activeSection}) => {
    const [width] = useWindowSize();

    // animation
    let title = useRef(null);
    let listItem = useRef(null);
    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 992) {
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
                Residential <br />
                in horizontal developments
            </h2>
            <ul ref={el => listItem = el}>{residentialList.map((residential) => <li
                key={residential}>{residential}</li>)}
            </ul>
        </div>
    );
};