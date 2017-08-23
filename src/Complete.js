import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import Centered from './Centered';

const Complete = props => {
  return (
    <Centered>
      <Container text style={{ color: 'white', fontWeight: 300 }}>
        <Header textAlign="center" style={{ color: 'white', fontSize: '4rem' }}>
          Thank you!
        </Header>
        <p style={{ textAlign: 'center' }}>
          We are excited that you share our passion and interest in changing the culture of event
          planning at McGill to make events more environmentally, economically, and socially
          sustainable.
        </p>
        <p style={{ textAlign: 'center' }}>We look forward to working with you!</p>
        <Divider hidden fitted />
      </Container>
    </Centered>
  );
};

export default Complete;
