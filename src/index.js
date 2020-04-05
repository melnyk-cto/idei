// core
import React from 'react';

//library
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

// components
import { App } from './componets';

// styles
import './index.scss';
import './assets/scss/main.scss'

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

