import React, { Component } from 'react';
import styled from 'styled-components';

export default class Search extends Component {
  render() {
    return (
      <Wrapper>
        <InputBox>
            <InputLabel htmlFor='fromCity'>FLY FROM</InputLabel>
            <Input id='fromCity' type='text' placeholder='SAN FRANCISCO, CA'/>
        </InputBox>
            <Logo src='/images/asset2.svg' />
        <InputBox>
            <InputLabel htmlFor='toCity'>TO</InputLabel>
            <Input id='toCity' type='text' placeholder='CITY'/>
        </InputBox>
            <Button>
                <Arrow src='/images/asset14.svg' />
            </Button>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 26%;
    height: 135px;
    padding-left: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3c4156;
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: -20px;
    flex-basis: 39%;
`;

const InputLabel = styled.label`
    color: #ffffff;
    font-size: 14px;
    padding-bottom: 16px;
    line-height: 20px;
`;

const Input = styled.input`
    padding: 13px 18px;
    border: 1px solid transparent;
    border-radius: 2px;
`;


const Button = styled.button`
    width: 46px;
    height: 46px;
    margin-top: 15px;
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
    margin: 15px 20px 0;
`;
