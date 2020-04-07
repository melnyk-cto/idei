// core
import React, { useState } from 'react';

// library
import { Link } from 'react-router-dom';

// images
import banner from '../../../assets/images/banner.png'
import logo from '../../../assets/images/logo.svg'
import login from '../../../assets/images/login.svg'
import trazzo from '../../../assets/images/trazzo-logo.svg'

// styles
import styles from './Header.module.scss';

const menus = ['NOSOTROS', 'VERTICAL', 'HORIZONTAL', 'COMERCIAL', 'FINANCIAMIENTO', 'RELACION', 'RELACION CON INVERSIONISTAS '];
export const Header = () => {

    const [active, setActive] = useState(false);
    const addClass = () => {
        setActive(!active);
    };

    return (
        <header className={styles.header}>
            <img src={banner} alt='banner' className={styles.banner} />
            <div className={styles.menuWrapper}>
                <div className={styles.logo}>
                    <Link to='/'> <img src={logo} alt='logo' /></Link>
                </div>
                <menu className={active ? [styles.menu + ' ' + styles.active] : styles.menu}>
                    <ul>
                        {menus.map(item => <li key={item}>
                            <Link to='/'>
                                {item}
                            </Link>
                            <Link to='/' className={styles.menuHover}>
                                {item}
                                <img src={trazzo} alt='' />
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