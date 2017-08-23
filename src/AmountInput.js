import React from 'react';
import { connect } from 'react-redux';
import { setKV, nextView, lowerPriority } from './actions.js';
import { Input } from 'semantic-ui-react';
import Responsive from 'react-responsive';


class AmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.textInput.focus();
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      if (parseInt(this.state.value, 10) <= 20) {
        this.props.lowerPriority([9, 14]);
      }
      this.props.setKV(this.props.valueKey, this.state.value);
    }
  };

  handleClick = () => {
    if (parseInt(this.state.value, 10) <= 20) {
      this.props.lowerPriority([9, 14]);
    }
    this.props.setKV(this.props.valueKey, this.state.value);
  };

  render() {
    return (
      <Responsive maxDeviceWidth={480}>
        {matches =>
          <Input
            size={matches ? 'large' : 'huge'}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            ref={input => (this.textInput = input)}
            icon={{
              name: 'arrow right',
              disabled: this.state.value.length < 1,
              onClick: this.handleClick,
              color: 'blue',
              link: true
            }}
          />}
      </Responsive>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setKV: (key, value) => {
      dispatch(setKV(key, value));
      dispatch(nextView());
    },
    lowerPriority: ids => {
      ids.map(id => dispatch(lowerPriority(id)));
    }
  };
};

export default connect(null, mapDispatchToProps)(AmountInput);
