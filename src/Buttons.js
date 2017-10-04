import React from 'react';
import { connect } from 'react-redux';
import { enableAction, setKV } from './actions.js';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import './Buttons.css';

const Buttons = ({ onYesClick, onNoClick }) => (
  <div className="buttons">
    <Button fluid size="huge" onClick={onYesClick}>
      Yes
    </Button>
    <Button fluid size="huge" onClick={onNoClick}>
      No
    </Button>
  </div>
);

const mapDispatchToProps = (dispatch, { history, enable, to, valueKey }) => {
  return {
    onYesClick: () => {
      enable.forEach(id => dispatch(enableAction(id)));
      dispatch(setKV(valueKey, true));
      history.replace(to);
    },
    onNoClick: () => {
      dispatch(setKV(valueKey, false));
      history.replace(to);
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Buttons));
