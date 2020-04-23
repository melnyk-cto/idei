// core
import React, { useEffect, useRef, useState } from 'react';

// library
import { TimelineLite, Expo } from 'gsap'

// components
import { Link } from "react-router-dom";
import { PaginationSlider } from "../../common/PaginationSlider/PaginationSlider";
import { useWindowSize } from "../../../hooks";

// images
import republicaTrazzoPage from "../../../assets/images/trazzo/republica-trazzo-page.jpg";
import recentProject from "../../../assets/images/trazzo/recent-project.jpg";
import trazzoLogoGreen from "../../../assets/images/trazzo/trazzo-logo-green.svg";

// styles
import styles from './Trazzo.module.scss';

let index = 0;
let lastTime = 0;
const animationDuration = 1500;
const duration = 2;
export const Trazzo = () => {
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
                    <img src={trazzoLogoGreen} alt='trazzo-logo-green' />
                    <span className={styles.link}><Link to='/'>www.trazzo.com.mx</Link></span>
                    <h3>DESARROLLOS HORIZONTALES</h3>
                    <span>Nuestros valores se reflejan en el servicio</span>
                    <p>
                        <span>TRAZZO</span> - Somos una empresa vanguardista con el respaldo de IDEI, nuestra filial con
                        46
                        años de
                        experiencia y liderazgo en proyectos de desarrollo inmobiliario en México y Estados Unidos.
                        Su función es promover, desarrollar, comercializar y administrar proyectos residenciales y
                        comerciales de excelente calidad, con los mejores diseños y materiales para brindar a sus
                        usuarios y
                        clientes el máximo confort. En Trazzo, el objetivo es que sus clientes vivan como se lo
                        imaginan.
                    </p>
                </div>
            </section>
            <section className={styles.amorada} ref={el => sections = el}>
                <PaginationSlider activeSection={activeSection} />
            </section>
            {/*control button*/}
            <button type='button' className='button' onClick={() => goToSection()} />
        </>
    );
};