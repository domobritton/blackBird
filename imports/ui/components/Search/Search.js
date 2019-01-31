import React, { Component } from 'react';
import styled from 'styled-components';

export default class Search extends Component {
  render() {
    return (
      <Wrapper>
            <Input type='text' placeholder='SAN FRANCISCO, CA'/>
            <Logo src='/images/asset2.svg' />
            <Input type='text' placeholder='CITY'/>
            <Button>
                <Arrow src='/images/asset14.svg' />
            </Button>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
    position: absolute;
    top: 415px;
    left: 0;
    right: 0;
    height: 135px;
    padding-left: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3c4156;
`;

const Input = styled.input`
    flex-basis: 33%;
    padding: 13px 18px;
    border: 1px solid transparent;
    border-radius: 2px;
`;

const Button = styled.button`
    width: 46px;
    height: 46px;
    border: 1px solid #fe4041;
    border-radius: 2px;
    background: #fe4041;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    margin-left: 15px;
`;

const Arrow = styled.img`
    width: 28px;
    height: 28px;
`;

const Logo = styled.img`
    width: 24px;
    margin: 0 20px;
`;
