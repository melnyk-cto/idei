// core
import React, { useEffect, useRef, useState } from 'react';

// components
import { SimpleSection, SimpleSlider, SmallSlider } from "../../common";
import { useWindowSize } from "../../../hooks";

// styles
import styles from './Home.module.scss';
import banner from "../../../assets/images/home/banner.jpg";
import video from "../../../assets/video/video-para home.mp4";

let index = 0;
let lastTime = 0;
const animationDuration = 1500;
export const Home = () => {
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

        const numberSections = allSections.parentElement.childNodes;
        numberSections.forEach((section, i) => {
            if (i === index) section.scrollIntoView({behavior: 'smooth'});
        });

        setActiveSection(index);
    };

    useEffect(() => {
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
    }, [width]);


    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className={styles.bannerWrapper}>
                <video onLoadedData={() => scrollTop()} className={styles.banner} autoPlay loop poster={banner} muted>
                    {width > 768 && <source src={video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />}
                    The video tag is not supported by your browser.
                </video>
                {width < 768 &&
                <div className={styles.bannerText}>
                    Con nuestro liderazgo y calidad en desarrollos inmobiliarios, hoy
                    somos la empresa más sobresaliente en el norte del país.
                </div>}
            </div>
            <SimpleSection activeSection={activeSection} />
            <section className={`${styles.simpleSlider} simpleSlider`} ref={el => sections = el}>
                <SimpleSlider activeSection={activeSection} />
            </section>
            <section className={`${styles.simpleSlider} ${styles.modified}`}>
                <SmallSlider activeSection={activeSection} />
            </section>
            {/*control button*/}
            <button type='button' className='button' onClick={() => goToSection()} />
        </>
    );
};