// core
import React from 'react';

// styles
import styles from './Footer.module.scss';

import leedLogo from '../../../assets/images/leedLogo.svg';
import facebookIcon from '../../../assets/images/facebookIcon.svg';
import instagramIcon from '../../../assets/images/instagramIcon.svg';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.lists}>
                <div className={styles.logo}>
                    <Link to='/'><img src={leedLogo} alt='logo' /></Link>
                    <h3>Construllendo responsablemente</h3>
                    <p>
                        Proyectos con Certificacion LEED por
                        eficiencia energética, iluminación natural
                        y ventilación diseñada.
                    </p>
                </div>
                <div className={styles.navigation}>
                    <h3>Navegación</h3>
                    <ul>
                        <li><Link to='/'>Nosotros</Link></li>
                        <li><Link to='/'>Vertical</Link></li>
                        <li><Link to='/'>Horizontal</Link></li>
                        <li><Link to='/'>Comercial</Link></li>
                        <li><Link to='/'>Oficinas</Link></li>
                        <li><Link to='/'>Financiamiento</Link></li>
                        <li><Link to='/'>Relación con Inversionistas</Link></li>
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <h3>Contacto</h3>
                    <ul>
                        <li><Link to='/'>Servicio postventa</Link></li>
                        <li><Link to='/'>Correo electrónico</Link></li>
                    </ul>
                </div>
                <div className={styles.social}>
                    <h3>Redes Sociales</h3>
                    <ul>
                        <li><Link to='/'>Siguenos en</Link></li>
                    </ul>
                    <Link to='/'><img src={facebookIcon} alt='facebook' /></Link>
                    <Link to='/'><img src={instagramIcon} alt='instagram' /></Link>
                </div>
            </section>
            <section className={styles.partners}>

            </section>
        </footer>
    );
};