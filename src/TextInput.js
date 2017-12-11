import React from 'react';
import { connect } from 'react-redux';
import { setKV } from './actions.js';
import { Input } from 'semantic-ui-react';
import Responsive from 'react-responsive';
import { withRouter } from 'react-router';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.textInput.focus();
  }

  handleKeyUp = e => {
    if (e.keyCode === 13 && this.state.value.length > 0) {
      this.props.setKV(this.props.valueKey, this.state.value);
    }
  };

  handleClick = () => {
    this.props.setKV(this.props.valueKey, this.state.value);
  };

  handleChange = (e, { value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <Responsive maxDeviceWidth={480}>
        {matches => (
          <Input
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            size={matches ? 'large' : 'huge'}
            ref={input => (this.textInput = input)}
            placeholder={this.props.placeholder}
            icon={{
              name: 'arrow right',
              disabled: this.state.value.length < 1,
              onClick: this.handleClick,
              color: 'blue',
              link: true
            }}
          />
        )}
      </Responsive>
    );
  }
}

const mapDispatchToProps = (dispatch, { history, to }) => {
  return {
    setKV: (key, value) => {
      dispatch(setKV(key, value));
      history.replace(to);
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(TextInput));
