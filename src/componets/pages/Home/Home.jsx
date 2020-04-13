// core
import React, { useEffect, useRef } from 'react';

// components
import { SimpleSection, SimpleSlider, SmallSlider } from "../../common";
import { useWindowSize } from "../../../hooks";

// styles
import styles from './Home.module.scss';
import banner from "../../../assets/images/home/banner.jpg";
import video from "../../../assets/video/video-para home.webm";

let index = 0;
let lastTime = 0;
const animationDuration = 1500;
export const Home = () => {
    const [width] = useWindowSize();

    let sections = useRef(null);

    // Go To Prev Section
    const prevClick = () => {
        if (index < 1) return;
        index--;
        const numberSections = sections.parentElement.childNodes;

        numberSections.forEach((section, i) => {
            if (i === index) section.scrollIntoView({behavior: 'smooth'});
        });
    };

    // Go To Next Section
    const nextClick = () => {
        if (index > 3) return;
        index++;
        const numberSections = sections.parentElement.childNodes;

        numberSections.forEach((section, i) => {
            if (i === index) section.scrollIntoView({behavior: 'smooth'});
        });
    };


    useEffect(() => {

        if (width > 992) {
            // Tracking mouse wheel event
            window.addEventListener('wheel', (event) => {
                const delta = event.wheelDelta;
                const currentTime = new Date().getTime();

                if (currentTime - lastTime < animationDuration) {
                    event.preventDefault();
                    return;
                }

                if (delta < 0) nextClick();
                if (delta > 0) prevClick();

                lastTime = currentTime;

            }, {passive: false});
        }

    }, [width]);


    return (
        <>
            <video className={styles.banner} autoPlay loop poster={banner} muted>
                <source src={video} type='video/webm; codecs="vp8, vorbis"' />
                The video tag is not supported by your browser.
            </video>
            <SimpleSection />
            <section className={styles.simpleSlider} ref={el => sections = el}>
                <h2>PROYECTOS RECIENTES</h2>
                <SimpleSlider />
            </section>
            <section className={`${styles.simpleSlider} ${styles.modified}`}>
                <h2>HISTORIA DE LIDERAZGO</h2>
                <p> Hemos mantenido nuestra posición de líder durante nuestra trayectoria.</p>
                <p>
                    Nuestro origen parte de la visión y experiencia de un selecto grupo de empresarios que han logrado
                    cambiar el paisaje urbano de la ciudad de Monterrey, lo que nos ha convertido en una alternativa
                    sólida y confiable para inversionistas de bienes raíces.
                </p>
                <SmallSlider />
            </section>
            {/*control */}
            <button type='button' onClick={() => prevClick()}>prev</button>
            <button type='button' className='next' onClick={() => nextClick()}>next</button>
        </>
    );
};