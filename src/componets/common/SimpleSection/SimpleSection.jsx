// core
import React, { useEffect, useRef } from 'react';

// library
import { gsap, TimelineLite, Expo } from 'gsap'

// images
import tifRepublica from '../../../assets/images/tif-republica.jpg';
import tifSaqqara from '../../../assets/images/tif-saqqara.jpg';

// styles
import styles from './SimpleSection.module.scss';
import { useWindowSize } from "../../../hooks";

const duration = 2;
export const SimpleSection = ({activeSection}) => {
    const [width] = useWindowSize();

    // animation
    gsap.registerPlugin();
    let smallImage = useRef(null);
    let image = useRef(null);
    let logoImage = useRef(null);
    let overImg = useRef(null);
    let overImgTitle = useRef(null);
    let overImgText = useRef(null);
    let description = useRef(null);

    const t1 = new TimelineLite();

    useEffect(() => {
        if (width > 992) {
            if (activeSection === 1) {
                t1.to(smallImage, duration, {opacity: 1, ease: Expo.easeInOut})
                    .to(image, duration, {height: '98%', ease: Expo.easeInOut}, `-=${duration}`)
                    .to(logoImage, duration, {backgroundPositionX: '0', ease: Expo.easeInOut}, `-=${duration}`)
                    .to(overImg, duration, {x: 0, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(description, duration, {opacity: 1, y: 0, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(overImgTitle, duration, {
                        opacity: 1,
                        y: 0,
                        ease: Expo.easeInOut,
                        delay: duration / 4
                    }, `-=${duration}`)
                    .to(overImgText, duration, {opacity: 1, y: 0, ease: Expo.easeInOut}, `-=${duration}`)
            } else {
                t1.to(smallImage, duration, {opacity: 0, ease: Expo.easeInOut})
                    .to(image, duration, {height: '0%', ease: Expo.easeInOut}, `-=${duration}`)
                    .to(logoImage, duration, {backgroundPositionX: -400, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(overImg, duration, {x: 400, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(description, duration, {opacity: 0, y: 60, ease: Expo.easeInOut}, `-=${duration}`)
                    .to(overImgTitle, duration, {
                        opacity: 0,
                        y: 30,
                        ease: Expo.easeInOut,
                        delay: duration / 4
                    }, `-=${duration}`)
                    .to(overImgText, duration, {opacity: 0, y: 30, ease: Expo.easeInOut}, `-=${duration}`)
            }
        }
    }, [width, activeSection, t1]);

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
                <p>
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