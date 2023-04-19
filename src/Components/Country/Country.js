import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div>
          <h2>Country Name: <span className='countryname'>{props.name}</span></h2>
        </div>
    );
};

export default Country;