import React from 'react';
import styled from 'styled-components';

import { Planes } from './Planes';
import { Product } from './Product';
import { Safety } from './Safety';

export const OnDemand = () => (
    <Page>
      <Section>
        <Heading>ON DEMAND</Heading>
        <SubHeading>Experience the freedom of flight on your schedule.</SubHeading>
        <Line />
        <Planes />
      </Section>
      <Product />
      <Safety />
    </Page>
);

const Page = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 30px;
`;

const Section = styled.div`
    margin: 0 auto;
    width: 80%;
`;

const Heading = styled.h1`
    letter-spacing: 8px;
    line-height: 44px;
    margin: 20px auto 10px;
    font-size: 40px;
    font-weight: 700;
    color: #1d2133;
`;

const SubHeading = styled.h2`
    color: rgba(51, 51, 51, 0.5);
    font-size: 18px;
    line-height: 20px;
    font-weight: 300;
`;

const Line = styled.hr`
    width: 50px;
    height: 5px;
    margin: 26px 0;
    background: #fe4041;
    border: none;
`;
