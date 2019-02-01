import React from 'react';

import { Toggle } from '../../../utilities';

import { Hero } from '../Hero';
import { Tabs } from './Tabs';
import { Shared } from '../SharedComponents';
import { OnDemand } from '../OnDemandComponents';
import { Footer }from '../Footer';

export const Landing = () => (
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
);
