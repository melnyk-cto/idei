// core
import React from 'react';

// images
import tifRepublica from '../../../assets/images/tif-republica.jpg';
import tifSaqqara from '../../../assets/images/tif-saqqara.jpg';

// styles
import styles from './SimpleSection.module.scss';

export const SimpleSection = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.images}>
                <img src={tifRepublica} alt='republica' />
                <div className={styles.overImg}>
                    <h3>VANGUARDIA</h3>
                    <p>Es nuestro enfoque actual y a futuro</p>
                </div>
                <div className={styles.overDiv}>
                    <img src={tifSaqqara} alt='saqqara' />
                </div>
            </div>
            <div className={styles.description}>
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