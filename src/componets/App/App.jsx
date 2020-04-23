// core
import React from 'react';

// library
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import { Comercial, Home, Trazzo } from "../pages";
import { Header, Footer } from "../common";
import { routes } from './routes';

// styles
import styles from './App.module.scss';

export const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>
                <Switch>
                    <Redirect exact from='/' to={routes.home} />
                    <Route path={routes.home} component={Home} />
                    <Route path={routes.trazzo} component={Trazzo} />
                    <Route path={routes.comercial} component={Comercial} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
};