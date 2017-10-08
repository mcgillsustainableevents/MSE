import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Centered from './Centered';
import './Complete.css';
import HomeButton from './HomeButton';
import scrollToTop from './ScrollToTop';

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
        <HomeButton />
      </Container>
    </Centered>
  );
};

export default scrollToTop(Complete);
