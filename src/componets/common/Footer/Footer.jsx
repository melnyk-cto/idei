// core
import React from 'react';

// components
import { Link } from "react-router-dom";

// images
import leedLogo from '../../../assets/images/leed-logo.svg';
import facebookIcon from '../../../assets/images/facebook-icon.svg';
import instagramIcon from '../../../assets/images/instagram-icon.svg';
import trazzoLogo from '../../../assets/images/trazzo-logo.svg';
import reelizaLogo from '../../../assets/images/reeliza-logo.svg';
import espaciaLogo from '../../../assets/images/espacia-logo.svg';
import logo from '../../../assets/images/logo.svg';

// styles
import styles from './Footer.module.scss';

const list = ['Nosotros', 'Vertical', 'Horizontal', 'Comercial', 'Oficinas', 'Financiamiento', 'Relación con Inversionistas'];

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.lists}>
                    <div className={styles.logo}>
                        <Link to='/'><img src={leedLogo} alt='logo' /></Link>
                        <div>
                            <h3>Construllendo responsablemente</h3>
                            <p>
                                Proyectos con Certificacion LEED por
                                eficiencia energética, iluminación natural
                                y ventilación diseñada.
                            </p>
                        </div>
                    </div>
                    <div className={styles.navigation}>
                        <h3>Navegación</h3>
                        <ul>{list.map(item =>
                            <li key={item}><Link to='/'>{item}</Link></li>
                        )}
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
                </div>
                <div className={styles.partners}>
                    <div className={styles.partnersInner}>
                        <Link to='/'><img src={trazzoLogo} alt='trazzo' /></Link>
                        <Link to='/'><img src={espaciaLogo} alt='espacia' /></Link>
                        <Link to='/'><img src={reelizaLogo} alt='reeliza' /></Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <Link to='/'><img src={logo} alt='logo' /></Link>
            </div>
        </footer>
    );
};