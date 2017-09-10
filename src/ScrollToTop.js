import React, { Component } from 'react';

class ScrollToTop extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return <div />;
  }
}

export default ScrollToTop;
