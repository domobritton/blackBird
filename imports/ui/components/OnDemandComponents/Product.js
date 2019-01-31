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
            <Boxes>
                <Box>
                    <Icon src='/images/asset6.png' />
                    <Text>Choose your plane.</Text>
                </Box>
                <Box>
                    <Icon src='/images/asset7.png' />
                    <Text>Pick a certified commercial pilot or bring your own.</Text>
                </Box>
                <Box>
                    <Icon src='/images/asset8.png' />
                    <Text>Fly from convenient, local airports at a time that suits you.</Text>
                </Box>
            </Boxes>
        </Details>
    </Section>
)

const Section = styled.div`
    display: flex;
    justify-content: center;
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
    flex-basis: 58%;
`;

const Title = styled.div`
    margin: 0 auto;
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
    margin: 26px auto;
    background: #fe4041;
    border: none;
`;

const Boxes = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    width: 100%;
`;

const Box = styled.div`
    width: 33.33333%;
    text-align: center;
    padding: 2.5%;
`;

const Icon = styled.img`
    width: 50px;
`;

const Text = styled.div`
    font-size: 16px;
    margin-top: 20px;
    color: #1d2133;
    font-weight: 500;
`;
