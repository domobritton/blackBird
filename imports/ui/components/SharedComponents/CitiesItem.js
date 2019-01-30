import React from 'react';

export const CitiesItem = ({ city }) => (
    <>
        <div>{city.destination}</div>
        <div>{city.airport}</div>
        <div>{city.price}</div>
        <div>{city.time}</div>
    </>
)
