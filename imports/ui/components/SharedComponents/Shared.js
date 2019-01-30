import React, { Component } from 'react'
import styled from 'styled-components';

import Regions from './Regions';

export default class Shared extends Component {
  render() {
    return (
      <PageWrapper>
        <Page>
          <Heading>SHARED</Heading>
          <SubHeading>Hop on a plane and get to where you want to be.</SubHeading>
          <Line />
          <Regions />
        </Page>
      </PageWrapper>
    )
  }
}

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
`;

const Page = styled.div`
    flex-basis: 80%;
`;

const Heading = styled.h1`
    letter-spacing: 8px;
    line-height: 44px;
    margin: 20px auto 10px;
    font-size: 40px;
    font-weight: 700;
    color: #1d2133;
`;

const SubHeading = styled.h2`
    color: rgba(51, 51, 51, 0.5);
    font-size: 18px;
    line-height: 20px;
    font-weight: 300;
`;

const Line = styled.hr`
    width: 50px;
    height: 5px;
    margin: 26px 0;
    background: #fe4041;
    border: none;
`;
