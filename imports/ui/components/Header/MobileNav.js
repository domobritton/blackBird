import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MobileNav = () => {
  return (
    <>
        <Nav>
            <LeftNav>
            <Link to='/'>
                <Logo src='/images/asset1.png' alt='Blackbird' />
            </Link>
            </LeftNav>
            <RightNav>
                <Hamburger>
                    <Bars href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Bars>
                </Hamburger>
            </RightNav>
        </Nav>
        <ScrollNav id='scrollNav'>
            <LeftNav>
            <Link to='/'>
                <Logo src='/images/asset0.png' alt='Blackbird' />
            </Link>
            </LeftNav>
            <RightNav>
                <Hamburger>
                    <Bars href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Bars>
                </Hamburger>
            </RightNav>
        </ScrollNav>
    </>
  )
}

const Nav = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    height: 60px;
`;

const ScrollNav = styled(Nav)`
    position: fixed;
    background: #ffffff;
    color: #000;
    transform: translateY(-100px);
    transition: 0.2s transform cubic-bezier(.3,.73,.3,.74);
    box-shadow: 0 2px 23px 4px rgba(0, 0, 0, .07);

    &.down {
      transform: translateY(0);
    }

`;

const Logo = styled.img`
    width: 120px;
`;

const LeftNav = styled.div`
    display: flex;
    flex-basis: 50%;
    margin-left: 30px;
`;

const RightNav = styled.div`
    display: flex;
    flex-basis: 50%;
    justify-content: flex-end;
`;

const Hamburger = styled.div`
    display: flex;
`;
    
const Bars = styled.a`
    width: 60px;
    height: 60px;   
    background: #fe4041;
    position: relative;
    transition: 250ms;

    span {
        display: block;
        height: 2px;
        background: #fff;
        position: absolute;
        top: calc(0% + 22px);
        left: 22px;
        right: 22px;
        transition: 250ms ease-in-out;

        &:first-child {
            top: calc(0% + 27px);
        }

        &:last-child {
            top: calc(0% + 32px);
        }
    }
`;
