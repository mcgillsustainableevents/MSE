import React from 'react';
import { Label } from 'semantic-ui-react';

const timeToColor = time => {
  if (time === 'LOW') return 'green';
  if (time === 'MED') return 'yellow';
  if (time === 'HIGH') return 'red';
};

const TimeLabel = ({ time }) => (
  <Label horizontal color={timeToColor(time)}>
    {time}
  </Label>
);

export default TimeLabel;
