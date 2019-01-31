import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Planes = () => (
    <Wrapper>
        <Routes to='/'>
            <Image src='/images/asset3.png' alt='Cirrus SR-22' />
        </Routes>
        <Routes to='/'>
            <Image src='/images/asset4.png' alt='Cirrus SR-22' />
        </Routes>
        <Routes to='/'>
            <Image src='/images/asset5.png' alt='Cirrus SR-22' />
        </Routes>
    </Wrapper>
);

const Wrapper = styled.div`
    display: grid;
    grid-gap: 15px;
    height: 350px;
    padding-top: 25px;
    grid-template-columns: 1fr 1fr 1fr;
`;

const Image = styled.img`
    height: 70%;
`;

const Routes = styled(Link)`
    height: 350px;
`;
