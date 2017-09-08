import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import Centered from './Centered';
import './Complete.css'

const Complete = props => {
  return (
    <Centered>
      <Container text className="complete">
        <Header textAlign="center">
          Thank you!
        </Header>
        <p>
          We are excited that you share our passion and interest in changing the culture of event
          planning at McGill to make events more environmentally, economically, and socially
          sustainable.
        </p>
        <p style={{fontWeight: 400}}>We look forward to working with you!</p>
      </Container>
    </Centered>
  );
};

export default Complete;
