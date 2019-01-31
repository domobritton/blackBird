import React from 'react';
import styled from 'styled-components';

export const Product = () => (
    <Section>
        <Image src='/images/asset18.jpeg' alt='Blackbird' />
    </Section>
)

const Section = styled.div`
    display: flex;
    height: 470px;
    width: 100vw;
`;

const Image = styled.img`
    width: 33%;
    height: 100%;
`;
