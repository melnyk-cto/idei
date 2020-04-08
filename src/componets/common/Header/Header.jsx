// core
import React, { useState } from 'react';

// library
import { Link } from 'react-router-dom';

// assets
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.svg'
import logoGray from '../../../assets/images/logo-gray.svg'
import login from '../../../assets/images/login.svg'
import trazzo from '../../../assets/images/trazzo-logo.svg'
import espacia from '../../../assets/images/espacia-logo.svg'
import reeliza from '../../../assets/images/reeliza-logo.svg'
import investor from '../../../assets/images/inversor-logo.svg'
import video from '../../../assets/video/video-para home.webm'
import banner from '../../../assets/images/home/banner.jpg'

const menus = [
    {url: '/', label: 'NOSOTROS', image: logoGray},
    {url: '/', label: 'VERTICAL', image: logoGray},
    {url: '/', label: 'HORIZONTAL', image: trazzo},
    {url: '/', label: 'COMERCIAL', image: espacia},
    {url: '/', label: 'FINANCIAMIENTO', image: reeliza},
    {url: '/', label: 'RELACION CON INVERSIONISTAS', image: investor},
];
export const Header = () => {

    const [active, setActive] = useState(false);
    const addClass = () => {
        setActive(!active);
    };

    return (
        <header className={styles.header}>
            <video className={styles.banner} autoPlay preload loop poster={banner}>
                <source src={video} type="video/webm" />
                The video tag is not supported by your browser.
            </video>
            <div className={styles.menuWrapper}>
                <div className={styles.logo}>
                    <Link to='/'> <img src={logo} alt='logo' /></Link>
                </div>
                <menu className={active ? [styles.menu + ' ' + styles.active] : styles.menu}>
                    <ul>
                        {menus.map(item => <li key={item.label}>
                            <Link to={item.url}>
                                {item.label}
                            </Link>
                            <Link to='/' className={styles.menuHover}>
                                <img src={item.image} alt='' />
                                {item.label}
                            </Link>
                        </li>)}
                    </ul>
                </menu>
                <button type='button' className={active ? [styles.burgerMenu + ' ' + styles.active] : styles.burgerMenu}
                        onClick={() => addClass()}>
                    <span className={styles.burgerMenuLines} />
                </button>
                <img src={login} alt='login' className={styles.login} />
            </div>
        </header>
    );
};