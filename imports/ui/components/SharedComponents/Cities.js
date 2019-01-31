import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CitiesItem } from './CitiesItem';

export const Cities = ({ cities }) => (
    <>
        <Heading>From</Heading>
        <City>{cities.fromCity}</City>
        <Wrapper>
            {cities.toCity.map(city => (
                <Box key={city.id} to='/'>
                    <Image src={city.image} alt={cities.destination} />
                    <CitiesItem city={city} />
                </Box>
            ))}
        </Wrapper>
    </>
)

const Wrapper = styled.div `
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 50px;
`;

const Box = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 200px;
    background: #000;
    overflow: hidden;
    text-decoration: none;
    color: black;
    border-radius: 3px;
`;

const Image = styled.img`
    height: 120%;
    width: auto;
    min-width: 100%;
    opacity: 0.8;
`;

const Heading = styled.div`
    font-weight: 500;
    line-height: 30px;
    font-size: 20px;
    color: rgba(51, 51, 51, 0.5);
`;

const City = styled(Heading)`
    color: #1d2133;
    font-size: 26px;
    margin-bottom: 10px;
`;
