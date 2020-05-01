// core
import React, { useRef, useEffect, useState } from 'react';

// components
import { SimpleSection, SimpleSlider, SmallSlider } from "../../common";
import { useWindowSize } from "../../../hooks";

// styles
import styles from './Home.module.scss';
import banner from "../../../assets/images/home/banner.jpg";
import video from "../../../assets/video/video-para home.mp4";

export const Home = () => {
    const [width] = useWindowSize();
    let second = useRef(null);
    let third = useRef(null);

    const [secondSection, setSecondSection] = useState(0);
    const [thirdSection, setThirdSection] = useState(0);

    useEffect(() => {
        setSecondSection(second);
        setThirdSection(third);
    }, []);

    return (
        <>
            <div className={styles.bannerWrapper}>
                <video
                    className={styles.banner}
                    autoPlay
                    loop poster={banner}
                    muted={false}>
                    {width > 768 && <source src={video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />}
                    The video tag is not supported by your browser.
                </video>
                {width < 768 &&
                <div className={styles.bannerText}>
                    Con nuestro liderazgo y calidad en desarrollos inmobiliarios, hoy
                    somos la empresa más sobresaliente en el norte del país.
                </div>}
            </div>
            <SimpleSection />
            <section className={`${styles.simpleSlider} simpleSlider`} ref={el => second = el}>
                <SimpleSlider position={secondSection} />
            </section>
            <section className={`${styles.simpleSlider} ${styles.modified}`} ref={el => third = el}>
                <SmallSlider position={thirdSection} />
            </section>
        </>
    );
};