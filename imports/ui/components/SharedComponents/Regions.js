import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { regionData } from '../../../utilities';

import { Cities } from './Cities';


export const Regions = () => (
    <>
        {regionData.map(region => (
            <Fragment key={region.id}>
                <Title>{region.heading}</Title>
                <Wrapper>
                    {region.cities.map(cities => (
                        <Fragment key={cities.id}>
                            <Cities cities={cities} />
                        </Fragment>
                    ))}     
                </Wrapper>
                <Routes to='/'>
                See all Routes in San Francisco Bay Area
                <Arrow src='/images/asset14.svg' />
                </Routes>
            </Fragment>
        ))}
    </>
);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    margin-top: 34px;
    font-size: 38px;
    line-height: 44px;
    margin-bottom: 10px;
    font-weight: 700;
`;

const Routes = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    border-radius: 3px;
    background: #fe4041;
    padding: 9px 15px;
    width: 275px;
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
`;

const Arrow = styled.img `
    width: 10px;
    height: 10px;
    margin-left: 3px;
`;
