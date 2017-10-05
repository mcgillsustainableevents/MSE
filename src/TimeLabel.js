import React from 'react';
import { Icon } from 'semantic-ui-react';

const timeToColor = time => {
  if (time === 'LOW') return 'green';
  if (time === 'MED') return 'yellow';
  if (time === 'HIGH') return 'red';
};

const TimeLabel = ({ time }) => <Icon size="large" name="clock" color={timeToColor(time)} />;

export default TimeLabel;
