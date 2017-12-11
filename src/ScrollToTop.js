import React, { Component } from 'react';

const scrollToTop = WrappedComponent =>
  class extends Component {
    componentWillMount() {
      window.scrollTo(0, 0);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default scrollToTop;
