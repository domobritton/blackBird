import React from 'react';
import styled from 'styled-components';

export const Safety = () => {
  return (
    <Section>
        <Wrapper>
            <Title>ON DEMAND</Title>
            <SubTitle>Safety first</SubTitle>
            <Line />
            <Heading>Your safety is our top priority.</Heading>
            <Boxes>
                <Box>
                    <Icon src='/images/asset9.svg' />
                    <SubHeading>Commercial pilots</SubHeading>
                    <Text>You always fly with FAA-licensed professionals.</Text>
                </Box>
                <Box>
                    <Icon src='/images/asset10.svg' />
                    <SubHeading>Blackbird approved</SubHeading>
                    <Text>Experience community leaders with a deep understanding of their local airports.</Text>
                </Box>
                <Box>
                    <Icon src='/images/asset11.svg' />
                    <SubHeading>Safe & sound</SubHeading>
                    <Text>Aircraft that are maintained to rigorous FAA mandated schedules and guidelines.</Text>
                </Box>
            </Boxes>
        </Wrapper>
    </Section>
  )
};

const Section = styled.div`
    display: flex;
    justify-content: center;
    height: 470px;
    padding: 20px 0;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-basis: 50%;
    flex-direction: column;
`;

const Title = styled.div`
    margin: 0 auto;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 8px;
    line-height: 20px;
`;

const SubTitle = styled.h2`
    margin: 0 auto;
    color: #1d2133;
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
`;

const Line = styled.hr `
    width: 50px;
    height: 5px;
    margin: 26px auto;
    background: #fe4041;
    border: none;
`;

const Heading = styled(SubTitle)`
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
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
    padding: 5.1%;
`;

const Icon = styled.img`
    width: 50px;
`;

const SubHeading = styled.div`
    margin: 24px auto 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
`;

const Text = styled.div`
    font-size: 13px;
    margin-top: 20px;
    color: #1d2133;
    font-weight: 500;
`;
