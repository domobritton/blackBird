import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import regionData from './regionData';
import { Cities } from './Cities';

export default class Regions extends Component {
  render() {
    return (
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
                </Fragment>
            ))}
        </>
    )
  }
}

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
