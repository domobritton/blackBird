import React from 'react';
import styled from 'styled-components';

export const Product = () => (
    <Section>
        <Image src='/images/asset18.jpeg' alt='Blackbird' />
        <Details>
            <Title>ON DEMAND</Title>
            <SubTitle>Take control of the trip</SubTitle>
            <Heading>Welcome to the largest network of rentable aircraft in the US.</Heading>
            <Line />
        </Details>
    </Section>
)

const Section = styled.div`
    display: flex;
    height: 470px;
    width: 100vw;
`;

const Image = styled.img`
    width: 42%;
    height: 100%;
`;

const Details = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.div`
    margin: 84px auto 12px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 8px;
    line-height: 20px;
`;

const SubTitle = styled.h2`
    margin: 16px auto 4px;
    color: #1d2133;
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
`;

const Heading = styled(SubTitle)`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
`;

const Line = styled.hr`
    width: 50px;
    height: 5px;
    margin: 26px 0;
    background: #fe4041;
    border: none;
`;
