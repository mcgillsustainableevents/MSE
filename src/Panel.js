import React from 'react';
import { Segment, Checkbox, Label, Divider } from 'semantic-ui-react';

const Panel = props => {
  return (
    <Segment>
      <Checkbox
        checked={props.action.checked}
        label={{
          children: (
            <div>
              <Label circular empty horizontal color={props.labelColor} />
              {props.action.action}
            </div>
          )
        }}
      />
      {props.active &&
        <div>
          <div style={{ height: '10px' }} />
          <Divider fitted />
          <div style={{ height: '5px' }} />
        </div>}
    </Segment>
  );
};

export default Panel;
