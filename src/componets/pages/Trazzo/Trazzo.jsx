// core
import React from 'react';

// components
import { Link } from "react-router-dom";

// images
import republicaTrazzoPage from "../../../assets/images/republica-trazzo-page.jpg";
import recentProject from "../../../assets/images/recent-project.jpg";
import trazzoLogoGreen from "../../../assets/images/trazzo-logo-green.svg";

// styles
import styles from './Trazzo.module.scss';

export const Trazzo = () => {
    return (
        <section className={styles.trazzo}>
            <div className={styles.images}>
                <img src={republicaTrazzoPage} alt='republica' />
                <div className={styles.overDiv}>
                    <img src={recentProject} alt='recent-project' />
                </div>
            </div>
            <div className={styles.description}>
                <img src={trazzoLogoGreen} alt='trazzo-logo-green' />
                <span className={styles.link}><Link to='/'>www.trazzo.com.mx</Link></span>
                <h3>DESARROLLOS HORIZONTALES</h3>
                <span>Nuestros valores se reflejan en el servicio</span>
                <p>
                    <span>TRAZZO</span> - Somos una empresa vanguardista con el respaldo de IDEI, nuestra filial con 46
                    años de
                    experiencia y liderazgo en proyectos de desarrollo inmobiliario en México y Estados Unidos.
                    Su función es promover, desarrollar, comercializar y administrar proyectos residenciales y
                    comerciales de excelente calidad, con los mejores diseños y materiales para brindar a sus usuarios y
                    clientes el máximo confort. En Trazzo, el objetivo es que sus clientes vivan como se lo imaginan.
                </p>
            </div>
        </section>
    );
};