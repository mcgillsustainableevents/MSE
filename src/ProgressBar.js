import React from 'react';
import { Progress } from 'semantic-ui-react';
import Responsive from 'react-responsive';

const ProgressBar = ({ value }) => (
  <Responsive maxDeviceWidth={480}>
    {matches => (
      <Progress
        style={{ marginTop: '20px' }}
        size={matches ? 'small' : 'medium'}
        value={value}
        total={12}
        color="blue"
      >
        <span style={{ color: 'white' }}>{`Question ${value}/12`}</span>
      </Progress>
    )}
  </Responsive>
);

export default ProgressBar;
