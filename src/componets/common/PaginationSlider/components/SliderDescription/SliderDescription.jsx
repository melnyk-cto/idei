// core
import React from 'react';
import { Link } from "react-router-dom";


export const SliderDescription = () => {
    return (
        <>
            <h2>
                BALCONES DE LAS MITRAS
            </h2>
            <ul>
                <li>- Departamentos con espacios naturales</li>
                <li>- Acceso controlado</li>
            </ul>
            <p>
                La gran vista panorámica que se aprecia desde , se suma al placer de vivir al poniente de la ciudad de
                Monterrey
            </p>
            <div className='link tc'>
                <Link to=''>Ver Projecto</Link>
            </div>
        </>
    );
};