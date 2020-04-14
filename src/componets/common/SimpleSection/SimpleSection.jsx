// core
import React, { useEffect, useRef } from 'react';

// library
import { Power3, TimelineLite } from 'gsap'

// images
import tifRepublica from '../../../assets/images/tif-republica.jpg';
import tifSaqqara from '../../../assets/images/tif-saqqara.jpg';

// styles
import styles from './SimpleSection.module.scss';
import { useWindowSize } from "../../../hooks";

const delay = 0;
const duration = 1;
export const SimpleSection = ({activeSection}) => {
    const [width] = useWindowSize();

    // animation
    let smallImage = useRef(null);
    let overImg = useRef(null);
    let overImgTitle = useRef(null);
    let overImgText = useRef(null);
    let description = useRef(null);
    let descriptionText = useRef(null);
    let image = useRef(null);
    let logoImage = useRef(null);

    const t1 = new TimelineLite();
    const t2 = new TimelineLite();
    const t3 = new TimelineLite();
    const t4 = new TimelineLite();
    const t5 = new TimelineLite();

    useEffect(() => {
        if (width > 992) {
            if (activeSection === 1) {
                t1.to(smallImage, duration, {opacity: 1, ease: Power3.easeInOut, delay: delay / 2});
                t2.to(overImg, duration, {x: 0, ease: Power3.easeOut, delay: delay / 2})
                    .to(overImgTitle, duration, {opacity: 1, y: 0, ease: Power3.easeInOut, delay: delay / 2})
                    .to(overImgText, duration, {opacity: 1, y: 0, ease: Power3.easeInOut, delay: delay / 3});
                t3.to(description, duration, {opacity: 1, y: 0, ease: Power3.easeInOut, delay: delay / 2});
                t4.to(image, duration, {height: '98%', ease: Power3.easeOut, delay: delay / 2});
                t5.to(logoImage, duration, {backgroundPositionX: '0', ease: Power3.easeInOut, delay: delay / 2})
            } else {
                t1.to(smallImage, duration, {opacity: 0, ease: Power3.easeInOut, delay: delay / 2});
                t2.to(overImg, duration, {x: '300%', ease: Power3.easeInOut, delay: delay / 2})
                    .to(overImgTitle, duration, {opacity: 0, y: 30, ease: Power3.easeInOut, delay: delay / 2})
                    .to(overImgText, duration, {opacity: 0, y: 30, ease: Power3.easeInOut, delay: delay / 2});
                t3.to(description, duration, {opacity: 0, y: 60, ease: Power3.easeInOut, delay: delay / 2});
                t4.to(image, duration, {height: '0%', ease: Power3.easeInOut, delay: delay / 2});
                t5.to(logoImage, duration, {backgroundPositionX: -200, ease: Power3.easeInOut, delay: delay / 2})
            }
        }

    }, [width, activeSection]);

    return (
        <section className={styles.wrapper} ref={el => logoImage = el}>
            <div className={styles.images}>
                <img src={tifRepublica} alt='republica' />
                <img className={styles.cover} src={tifRepublica} alt='republica' ref={el => image = el} />
                <div className={styles.overImg} ref={el => overImg = el}>
                    <h3 ref={el => overImgTitle = el}>VANGUARDIA</h3>
                    <p ref={el => overImgText = el}>Es nuestro enfoque actual y a futuro</p>
                </div>
                <div className={styles.overDiv}>
                    <img src={tifSaqqara} alt='saqqara' ref={el => smallImage = el} />
                </div>
            </div>
            <div className={styles.description} ref={el => description = el}>
                <span>Tenemos una Visión – Misión:</span>
                <h3>
                    CREAR PROYECTOS INMOBILIARIOS
                    ÚNICOS Y VANGUARDISTAS QUE
                    MEJOREN LA CALIDAD
                    DE VIDA DE LAS PERSONAS.
                </h3>
                <p ref={el => descriptionText = el}>
                    Para consolidar su posición de liderazgo,
                    IDEI se enfoca en instituciones de
                    inversión que
                    buscan colaborar con desarrolladores
                    experimentados, que cuenten
                    con una estructura de
                    gobierno o corporativa sólida que garantice la
                    seguridad en
                    sus inversiones.
                </p>
            </div>
        </section>
    );
};