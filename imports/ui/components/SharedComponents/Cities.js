import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CitiesItem } from './CitiesItem';

export const Cities = ({ cities }) => (
    <Wrapper>
        <div>From</div>
        <div>{cities.fromCity}</div>
        {cities.toCity.map(city => (
            <Box key={city.id} to='/'>
                <CitiesItem city={city} />
            </Box>
        ))}
    </Wrapper>
)

const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Box = styled(Link)`
    width: 200px;
    height: 200px;
    background: gray;
    text-decoration: none;
    color: black;
`;
