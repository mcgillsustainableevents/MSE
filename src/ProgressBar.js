import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'semantic-ui-react';
import Responsive from 'react-responsive';

const ProgressBar = ({ value, total }) =>
  <Responsive maxDeviceWidth={480}>
    {matches =>
      <Progress style={{marginTop: '20px'}} size={matches ? 'small' : 'medium'} value={value} total={total} color="blue">
        <span style={{ color: 'white' }}>{`Question ${value}/${total}`}</span>
      </Progress>}
  </Responsive>;

const mapStateToProps = state => ({
  value: state.currentView + 1,
  total: state.totalQuestions
});

export default connect(mapStateToProps)(ProgressBar);
