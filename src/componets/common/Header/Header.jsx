// core
import React, { useState, useEffect } from 'react';

// components
import { useWindowSize } from "../../../hooks";
import { routes } from "../../App/routes";

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
    {url: routes.home, label: 'NOSOTROS', image: logoGray},
    {url: '/', label: 'VERTICAL', image: logoGray},
    {url: routes.trazzo, label: 'HORIZONTAL', image: trazzo},
    {url: '/', label: 'COMERCIAL', image: espacia},
    {url: '/', label: 'FINANCIAMIENTO', image: reeliza},
    {url: '/', label: 'RELACION CON INVERSIONISTAS', image: investor},
];
export const Header = () => {
    const [active, setActive] = useState(false);
    const [width] = useWindowSize();

    const addClass = () => {
        setActive(!active);
    };

    useEffect(() => {
        if (width <= 1640 && active) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [width, active]);

    return (
        <header className={styles.header}>
            {window.location.pathname === '/idei' &&
            <video className={styles.banner} autoPlay loop poster={banner} muted>
                <source src={video} type='video/webm; codecs="vp8, vorbis"' />
                The video tag is not supported by your browser.
            </video>}
            <div className={styles.menuWrapper}>
                <div className={styles.logo}>
                    <a href='/'> <img src={logo} alt='logo' /></a>
                </div>
                <menu className={active ? [styles.menu + ' ' + styles.active] : styles.menu}>
                    <ul>
                        {menus.map(item => <li key={item.label}>
                            <a href={item.url}>
                                {item.label}
                            </a>
                            <a href={item.url} className={styles.menuHover}>
                                <img src={item.image} alt='' />
                                {item.label}
                            </a>
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