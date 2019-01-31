import React from 'react';
import styled from 'styled-components';

export const Planes = () => (
    <Wrapper>
        <Box src='/images/asset3.png' alt='Cirrus SR-22'></Box>
        <Box src='/images/asset4.png' alt='Cirrus SR-22'></Box>
        <Box src='/images/asset5.png' alt='Cirrus SR-22'></Box>
    </Wrapper>
);

const Wrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    height: 550px;
    grid-template-columns: 1fr 1fr 1fr;
`;

const Box = styled.img`

`;
