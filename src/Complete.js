import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Centered from './Centered';
import './Complete.css';
import scrollToTop from './ScrollToTop';
import { Button } from 'semantic-ui-react';

const Complete = ({ history }) => {
  return (
    <Centered>
      <Container text className="complete">
        <Header textAlign="center">Thank you!</Header>
        <p>
          We are excited that you share our passion and interest in changing the culture of event
          planning at McGill to make events more environmentally, economically, and socially
          sustainable.
        </p>
        <p style={{ fontWeight: 400 }}>We look forward to working with you!</p>
        <Button  onClick={() => history.replace('/')}>Return to home page</Button>
      </Container>
    </Centered>
  );
};

export default scrollToTop(Complete);
