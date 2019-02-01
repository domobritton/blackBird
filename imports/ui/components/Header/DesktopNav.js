import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DesktopNav = () => {
  return (
      <>
        <Nav>
          <LeftNav>
            <Link to='/'>
              <Logo src='/images/asset1.png' alt='Blackbird' />
            </Link>
          </LeftNav>
          <RightNav>
            <SignIn to='/booking/signIn'>My account</SignIn>
          </RightNav>
        </Nav>
        <ScrollNav id='scrollNav'>
          <LeftNav>
            <Link to='/'>
              <Logo src='/images/asset0.png' alt='Blackbird' />
            </Link>
          </LeftNav>
          <ScrollRightNav>
            <ScrollSignIn to='/booking/signIn'>BOOK NOW</ScrollSignIn>
          </ScrollRightNav>
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
    margin-right: 10px;
    justify-content: flex-end;
`;

const ScrollRightNav = styled(RightNav)`
    margin-right: 0;
`;

const SignIn = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fe4041;
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight: 300;
    border-radius: 2px;
    padding: 10px;
`;

const ScrollSignIn = styled(SignIn)`
    height: 40px;
    width: 86px;
    border-radius: 0px;
`;
