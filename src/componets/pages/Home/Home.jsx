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
            {/*<SimpleSlider />*/}
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
        </>
    );
};