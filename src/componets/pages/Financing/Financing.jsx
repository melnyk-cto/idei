// core
import React, { useEffect, useRef, useState } from 'react';

// library
import { TimelineLite, Expo } from 'gsap'

// components
import { useWindowSize } from "../../../hooks";

// images
import headerImage from "../../../assets/images/financing/realiza-header.png";
import financing from "../../../assets/images/financing/reeliza-logo.svg";

// styles
import styles from './Financing.module.scss';

let index = 0;
let lastTime = 0;
const animationDuration = 1500;
const duration = 2;
export const Financing = () => {
    const [width] = useWindowSize();

    let sections = useRef(null);

    const [activeSection, setActiveSection] = useState(0);
    const [allSections, setAllSections] = useState(sections);

    // Go To  Section
    const goToSection = (minmax, operation) => {

        if (operation === '--') {
            if (index < minmax) return;
            index--;
        } else if (operation === '++') {
            if (index > 3) return;
            index++;
        }

        if (allSections.parentElement === null) return false;
        const numberSections = allSections.parentElement.childNodes;
        numberSections.forEach((section, i) => {
            if (i === index) section.scrollIntoView({behavior: 'smooth'});
        });

        setActiveSection(index);
    };

    const onWheel = () => {
        // if (!wheel) return false;
        setAllSections(sections);
        if (width > 1200) {
            // Tracking mouse wheel event
            window.addEventListener('wheel', (event) => {
                const delta = event.wheelDelta;
                const currentTime = new Date().getTime();

                if (currentTime - lastTime < animationDuration) {
                    event.preventDefault();
                    return;
                }

                if (delta < 0) goToSection(3, '++');
                if (delta > 0) goToSection(1, '--');

                lastTime = currentTime;
            }, {passive: false});
        }
    };

    useEffect(() => {
        onWheel();
    }, [width]);


    // animation
    const t1 = new TimelineLite();
    let image = useRef(null);
    let description = useRef(null);

    useEffect(() => {

        if (width > 1200) {
            if (activeSection === 0) {
                t1.to(image, duration, {opacity: 1, ease: Expo.easeInOut})
                    .to(description, duration, {opacity: 1, y: 0, ease: Expo.easeInOut}, `-=${duration}`)
            } else {
                t1.to(image, duration, {opacity: 0, ease: Expo.easeInOut})
                    .to(description, duration, {opacity: 0, y: 100, ease: Expo.easeInOut}, `-=${duration}`)
            }
        }

    }, [activeSection, t1, width]);


    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return (
        <>
            <section className={styles.trazzo} onLoad={() => scrollTop()} ref={el => sections = el}>
                <div className={styles.images}>
                    <img src={headerImage} alt='republica' ref={el => image = el} />
                </div>
                <div className={styles.description} ref={el => description = el}>
                    <img src={financing} alt='logo' />
                    <span className={styles.link}>
                        <a href='http://www.realizatupatrimonio.com.mx'
                           target='_blank'
                           rel="noopener noreferrer"
                           className='yellow'>www.realizatupatrimonio.com.mx</a></span>
                    <h3>FINANCIAMIENTO - REALIZA</h3>
                    <span>Nuestros valores se reflejan en el servicio</span>
                    <p>
                        <span>En Realiza</span> financiamos soluciones para tus necesidades. Te ofrecemos el esquema más
                        atractivo del mercado, con productos financieros destinados a proyectos de vivienda en sector
                        horizontal y vertical, pertenecientes a Internacional de Inversiones.
                    </p>
                    <p>
                        Si tienes o has tenido algún problema de buró de crédito, acércate con nosotros y buscamos
                        alguna alternativa para ti.
                    </p>
                </div>
            </section>
            {/*control button*/}
            <button type='button' className='button' onClick={() => goToSection()} />
        </>
    );
};