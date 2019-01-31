import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../Header';

export default class Hero extends Component {

  render() {
    return (
        <HeroWrapper>
            <Header />
            <ImageWrapper>
                <Image src='/images/asset13.jpeg' alt='Blackbird Image' />
                <TextBox>
                    <h1>DEFY GRAVITY</h1>
                    <h2>Experience the freedom of flight, for less than the cost of driving</h2>
                </TextBox>
            </ImageWrapper>
        </HeroWrapper>
    );
  }
};

const HeroWrapper = styled.div`
    position: relative;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 74vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`;

const Image = styled.img`
    height: 100%;
    width: auto;
    min-width: 100%;
`;

const TextBox = styled.div`
    width: 650px;
    position: absolute;
    top: 145px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    color: #ffffff;

    h1 {
        font-size: 64px;
        font-weight: 700;
        margin: 0;
    }

    h2 {
        font-size: 22px;
        font-weight: 300;
    }
`;
