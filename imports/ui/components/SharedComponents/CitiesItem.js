import React from 'react';
import styled from 'styled-components';

export const CitiesItem = ({ city }) => (
    <BoxText>
        <Destination>{city.destination}</Destination>
        <Airport>{city.airport}</Airport>
        <Price>{city.price}</Price>
        <Time>{city.time}</Time>
    </BoxText>
);

const BoxText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
`;

const Destination = styled.div`
    color: #ffffff;
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
`;

const Airport = styled.div`
    color: hsla(0,0%,100%,.65);
    font-size: 14px;
    margin: 10px 0;
`;

const Price = styled.div`
    position: absolute;
    bottom: 20px;
    color: #ffffff;
    font-size: 30px;
    font-weight: 500;
`;

const Time = styled(Airport)`
    position: absolute;
    bottom: 5px;
    margin: 0;
`;
