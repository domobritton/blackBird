import React, { Component } from 'react';

import { Resize } from '../../../utilities';

import { DesktopNav } from './DesktopNav';
import { MobileNav }from './MobileNav';
export default class Header extends Component {

  state = {
    scroll: 0
  }
 
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let scroll = window.scrollY;
    let scrollDiv = document.getElementById('scrollNav');
    if (scroll > 60) {
      scrollDiv.classList.add('down')
    } else {
      scrollDiv.classList.remove('down')
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <Resize>
        {({ width }) => (
        <>
          {(width < 991) ? <MobileNav /> : <DesktopNav />}
        </>
        )}
      </Resize>
    );
  }
};
