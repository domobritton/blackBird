import React, { Component } from 'react';
import styled from 'styled-components';

import Shared from '../SharedComponents';
import OnDemand from '../OnDemandComponents';
import Search from '../Search';

export default class Tabs extends Component {

    state = {
        toggle: false
    }

    toggle = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }
    
    render() { 
        const { toggle } = this.state
        let sharedActive = !toggle ? 'active' : '';
        let demandActive = toggle ? 'active' : '';
       
        return (
            <>
                <TabsMenu>
                    <BoxTab 
                        onClick={(e) => this.toggle(e)} 
                        value='Shared'
                        className={sharedActive}>
                        {!toggle && <Line />}
                        <Icon src='/images/asset15.png' alt='Shared flights' />
                        <Label>SHARED</Label>
                        <Description className={sharedActive}>Hop on a flight that is already going</Description>
                        <Price className={sharedActive}>$50+</Price>
                    </BoxTab> 
                    <BoxTab 
                        onClick={(e) => this.toggle(e)} 
                        value='Demand'
                        className={demandActive}>
                        {toggle && <Line />} 
                        <Icon src='/images/asset16.png' alt='On Demand flights' />
                        <Label>ON DEMAND</Label> 
                        <Description className={demandActive}>Choose a plane, choose a <br />pilot</Description>
                        <Price className={demandActive}>$299+</Price>
                    </BoxTab>
                </TabsMenu> 
                <Search />
                {toggle ? <OnDemand /> : <Shared />}
            </>
        );
    }
}

const TabsMenu = styled.div `
    position: absolute;
    top: 240px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 10;
`;

const BoxTab = styled.button `
    position: relative;
    width: 300px;
    height: 168px;
    cursor: pointer;
    background: #1d2133;
    border: none;
    outline: none;
    color: #ffffff;
    
    &.active {
        background: #3c4156;
    }
`;

const Line = styled.hr `
    position: absolute;
    top: -8px;
    left: 0;
    right: 0;
    border: none;
    margin: 0;
    height: 8px;
    background: #fe4041;
`;

const Label = styled.div `
    margin: 12px auto 10px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 8px;
    color: #ffffff;
`;

const Description = styled.div `
    margin: 6px 35px 0;
    font-size: 14px;
    line-height: 1.1;
    font-weight: 300;
    color: gray;

    &.active {
        color: #ffffff;
    }
`;

const Price = styled.div `
    margin: 16px auto 0;
    font-size: 13px;
    line-height: 16px;
    color: gray;

    &.active {
        color: #ffffff;
    }
`;

const Icon = styled.img `
    position: relative;
    margin: -70px auto 5px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;
