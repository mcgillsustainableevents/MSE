import React from 'react';
import { connect } from 'react-redux';
import { setKV, nextView, lowerPriority } from './actions.js';
import { Input } from 'semantic-ui-react';
import moment from 'moment';
import Responsive from 'react-responsive';

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', validDate: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.textInput.focus();
  }

  handleChange = e => {
    if (moment(e.target.value, 'M/D/YY', true).isValid()) {
      this.setState({ validDate: true });
    }
    this.setState({ text: e.target.value });
  };

  handleKeyUp = e => {
    if (
      e.keyCode === 13 &&
      this.state.validDate &&
      moment(this.state.text, 'M/D/YY', true).isBefore(moment().add(2, 'weeks'))
    ) {
      this.props.lowerPriority([1, 7, 14, 17, 21, 22, 23, 24, 32, 34]);
      this.props.setKV(this.props.valueKey, this.state.text);
    } else if (e.keyCode === 13 && this.state.validDate) {
      this.props.setKV(this.props.valueKey, this.state.text);
    }
  };

  handleClick = () => {
    if (
      this.state.validDate &&
      moment(this.state.text, 'M/D/YY', true).isBefore(moment().add(2, 'weeks'))
    ) {
      this.props.lowerPriority([1, 7, 14, 17, 21, 22, 23, 24, 32, 34]);
      this.props.setKV(this.props.valueKey, this.state.text);
    } else if (this.state.validDate) {
      this.props.setKV(this.props.valueKey, this.state.text);
    }
  };

  render() {
    return (
      <Responsive maxDeviceWidth={480}>
        {matches => (
          <Input
            placeholder="mm/dd/yy"
            size={matches ? 'large' : 'huge'}
            ref={input => (this.textInput = input)}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            icon={{
              name: 'arrow right',
              disabled: !this.state.validDate,
              onClick: this.handleClick,
              color: 'blue',
              link: true,
            }}
          />
        )}
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
    },
  };
};

export default connect(null, mapDispatchToProps)(DateInput);
