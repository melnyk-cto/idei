// core
import React from 'react';

// library
import { Link } from "react-router-dom";

// components
import { MobileSlider } from "../../common";

// images
import republica from '../../../assets/images/home/republica.svg'

// styles
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <>
            <section className={styles.simple}>
                <h2>PROYECTOS RECIENTES</h2>
                <MobileSlider />
                <div className={styles.description}>
                    <img src={republica} alt='' />
                    <ul className='dashed'>
                        <li>236 departamentos de 130 a 832 m2</li>
                        <li>Amenidades:</li>
                    </ul>
                    <ul className='dashed'>
                        <li>Alberca con doble carril de nado</li>
                        <li>Gimnasio</li>
                        <li>Cuarto de Juegos</li>
                        <li>Salón de eventos</li>
                        <li>Sala de visitas</li>
                        <li>
                            23,200 m2 de áreas verdes,
                            espejos de aguas y andadores
                        </li>
                    </ul>
                    <div className={styles.link}>
                        <Link to=''>Ver Projecto</Link>
                    </div>
                </div>
            </section>
            <section className={styles.simple}>
                <h2>HISTORIA DE LIDERAZGO</h2>
                <p>
                    Hemos mantenido nuestra posición de líder durante nuestra trayectoria.
                    Nuestro origen parte de la visión y experiencia de un selecto grupo de empresarios que han logrado
                    cambiar el paisaje urbano de la ciudad de Monterrey, lo que nos ha convertido en una alternativa
                    sólida y confiable para inversionistas de bienes raíces.
                </p>
                <MobileSlider />
                <div className={styles.description}>
                    <h2>
                        Residential <br />
                        in horizontal developments
                    </h2>
                    <ul>
                        <li>2013 - 2016 Torres Céntrika</li>
                        <li>2012 - 2016 Los Castaños Private Residential</li>
                        <li>2012 - 2018 Amorada Private Residential</li>
                        <li>2012 - 2017 Balcones de las Mitras IV Sector</li>
                        <li>2010 - 2014 Catujanes Priv. Residential</li>
                        <li>2005 - 2016 Céntrika</li>
                        <li>2005 - 2011 Private Aqueduct</li>
                        <li>2005 - 2011 Hacienda del Carmen</li>
                        <li>2004 - 2005 Villa Sierra</li>
                        <li>2005 - 2011 The Provinces</li>
                        <li>2003 - 2016 Colinas del Valle</li>
                        <li>2003 - 2009 Private Los Pinos</li>
                    </ul>
                </div>
            </section>
        </>
    );
};