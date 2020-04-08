// core
import React from 'react';

// components
import { SimpleSection, SimpleSlider, SmallSlider } from "../../common";

// styles
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <>
            <SimpleSection />
            <section className={styles.simpleSlider}>
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
        </>
    );
};