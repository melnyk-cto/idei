// core
import React from 'react';


const residentialList = [
    '2013 - 2016 Torres Céntrika', '2012 - 2016 Los Castaños Private Residential',
    '2012 - 2018 Amorada Private Residential', '2012 - 2017 Balcones de las Mitras IV Sector',];
export const SliderDescription = () => {
    return (
        <>
            <h2>
                Residential <br />
                in horizontal developments
            </h2>
            <ul>{residentialList.map((residential) => <li key={residential}>{residential}</li>)}
            </ul>
        </>
    );
};