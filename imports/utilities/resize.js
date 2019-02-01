import React, { Component } from 'react';

export default class Resize extends Component {

    state = {
        width: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
       this.setState({ width: window.innerWidth });
    }

  render() {
      const { children } = this.props;
    return children({
        width: this.state.width,
    });
  }
};
