import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Header extends Component {
  render() {
    return (
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
    );
  }
};

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
