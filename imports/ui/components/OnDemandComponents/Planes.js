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
    display: flex;
    justify-content: space-between;
    margin: 50px 0 70px;
`;

const Image = styled.img`
    width: 100%;
`;

const Routes = styled(Link)`
    width: 32%;
`;
