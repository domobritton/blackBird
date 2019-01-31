import React, { Component } from 'react';

import { Toggle } from '../../../utilities';

import { Hero, Tabs } from '../Hero';
import Shared from '../SharedComponents';
import OnDemand from '../OnDemandComponents';
import { Footer }from '../Footer';


export default class Landing extends Component {

  render() {
    return (
      <>
        <Hero />
        <Toggle>
            {({on, toggle}) => (
                <>
                <Tabs toggle={toggle} on={on} />
                {on ? <OnDemand /> : <Shared />}
                </>
            )}
        </Toggle>
        <Footer />
      </>
    )
  }
}
