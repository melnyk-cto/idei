// core
import React, { useEffect, useRef, useState } from 'react';

// library
import { TimelineLite, Expo } from 'gsap'

// components
import { VerticalSlider } from "./VerticalSlider/VerticalSlider";
import { useWindowSize } from "../../../hooks";

// images
import republicaTrazzoPage from "../../../assets/images/comercial/comercial-h2.jpg";
import recentProject from "../../../assets/images/comercial/comercial-h1.jpg";
import ideiLogo from "../../../assets/images/vertical/logo-idei.svg";

// styles
import styles from './../Trazzo/Trazzo.module.scss';
import './Vertical.scss';

let index = 0;
let lastTime = 0;
const animationDuration = 1500;
const duration = 2;
export const Vertical = () => {
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
    let smallImage = useRef(null);
    let image = useRef(null);
    let description = useRef(null);

    useEffect(() => {

        if (width > 1200) {
            if (activeSection === 0) {
                t1.to(image, duration, {opacity: 1, ease: Expo.easeInOut})
                    .to(smallImage, duration, {height: '98%', ease: Expo.easeInOut}, `-=${duration}`)
                    .to(description, duration, {opacity: 1, y: 0, ease: Expo.easeInOut}, `-=${duration}`)
            } else {
                t1.to(image, duration, {opacity: 0, ease: Expo.easeInOut})
                    .to(smallImage, duration, {height: 0, ease: Expo.easeInOut}, `-=${duration}`)
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
            <section className={styles.trazzo} onLoad={() => scrollTop()}>
                <div className={styles.images}>
                    <img src={republicaTrazzoPage} alt='republica' ref={el => image = el} />
                    <div className={styles.overDiv}>
                        <img src={recentProject} alt='recent-project' />
                        <div className={styles.cover}>
                            <img src={recentProject} alt='recent-project' ref={el => smallImage = el} />
                        </div>
                    </div>
                </div>
                <div className={styles.description} ref={el => description = el}>
                    <img src={ideiLogo} alt='idei logo' />
                    <h3>IDEI - VERTICAL</h3>
                    <p>
                        <span>En IDEI</span> nos esforzamos por trascender desarrollando proyectos inmobiliarios únicos
                        y vanguardistas. Cada uno de ellos mejora la calidad de vida de las personas, al mismo tiempo
                        que embellece nuestro entorno al mezclarse con obras diseñadas por los mejores arquitectos
                        nacionales e internacionales.
                    </p>
                </div>
            </section>
            <section className={`${styles.amorada} vertical`} ref={el => sections = el}>
                <VerticalSlider activeSection={activeSection} />
            </section>
            {/*control button*/}
            <button type='button' className='button' onClick={() => goToSection()} />
        </>
    );
};

