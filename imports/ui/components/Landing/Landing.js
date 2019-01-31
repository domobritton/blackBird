import React, { Component } from 'react';

import { Hero, Tabs } from '../Hero';
import Shared from '../SharedComponents';
import OnDemand from '../OnDemandComponents';
import { Footer }from '../Footer';


export default class Landing extends Component {

    state = {
        on: false
    }

    toggle = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            on: !prevState.on
        }));
    }


  render() {
      const { on } = this.state;
    return (
      <>
        <Hero />
        <Tabs 
            toggle={(e) => this.toggle(e)}
            on={on}
            />
        {on ? <OnDemand /> : <Shared />}
        <Footer />
      </>
    )
  }
}
