// core
import React from 'react';


const residentialList = [
    '2013 - 2016 Torres Céntrika', '2012 - 2016 Los Castaños Private Residential',
    '2012 - 2018 Amorada Private Residential', '2012 - 2017 Balcones de las Mitras IV Sector',
    '2010 - 2014 Catujanes Priv. Residential', '2005 - 2016 Céntrika', '2005 - 2011 Private Aqueduct',
    '2005 - 2011 Hacienda del Carmen', '2004 - 2005 Villa Sierra', '2005 - 2011 The Provinces', '2003 - 2016 Colinas del Valle', '2003 - 2009 Private Los Pinos'];
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