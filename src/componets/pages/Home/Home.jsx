// core
import React from 'react';

// library
import { Link } from "react-router-dom";

// components
import { SimpleSection, SimpleSlider } from "../../common";

// images
import republica from '../../../assets/images/home/republica.svg'

// styles
import styles from './Home.module.scss';

const residentialList = [
    '2013 - 2016 Torres Céntrika', '2012 - 2016 Los Castaños Private Residential',
    '2012 - 2018 Amorada Private Residential', '2012 - 2017 Balcones de las Mitras IV Sector',
    '2010 - 2014 Catujanes Priv. Residential', '2005 - 2016 Céntrika', '2005 - 2011 Private Aqueduct',
    '2005 - 2011 Hacienda del Carmen', '2004 - 2005 Villa Sierra', '2005 - 2011 The Provinces', '2003 - 2016 Colinas del Valle', '2003 - 2009 Private Los Pinos'];
export const Home = () => {
    return (
        <>
            <SimpleSection />
            <section className={styles.simpleSlider}>
                <h2>PROYECTOS RECIENTES</h2>
                <SimpleSlider />
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
            <section className={styles.simpleSlider}>
                <h2>HISTORIA DE LIDERAZGO</h2>
                <p>
                    Hemos mantenido nuestra posición de líder durante nuestra trayectoria.<br />
                    Nuestro origen parte de la visión y experiencia de un selecto grupo de empresarios que han logrado
                    cambiar el paisaje urbano de la ciudad de Monterrey, lo que nos ha convertido en una alternativa
                    sólida y confiable para inversionistas de bienes raíces.
                </p>
                <SimpleSlider />
                <div className={styles.description}>
                    <h2>
                        Residential <br />
                        in horizontal developments
                    </h2>
                    <ul>
                        {residentialList.map((residential) =>
                            <li key={residential}>{residential}</li>
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
};