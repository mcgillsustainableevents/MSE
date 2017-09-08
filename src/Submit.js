import React from 'react';
import { Button, Container, Divider, Header, List } from 'semantic-ui-react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { nextView } from './actions.js';
import Centered from './Centered';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const Submit = props => {
  const encode = data =>
    data
      .entrySeq()
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

  const handleSubmit = () => {
    const request = new XMLHttpRequest();
    request.open('POST', '/', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(encode(props.data));
  };

  const handleClick = () => {
    var request = new XMLHttpRequest();
    request.open(
      'POST',
      'https://0hsnlpfu9j.execute-api.us-west-2.amazonaws.com/prod/McGill',
      true
    );
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(props.data));
  };
  return (
    <Centered>
      <ScrollToTop />
      <Container text style={{ color: 'white', fontWeight: 300 }}>
        <Header
          textAlign="center"
          style={{ color: 'white', fontSize: '4rem' }}
        >{`Let's do it!`}</Header>
        <p style={{ textAlign: 'center' }}>
          We’re excited to get your event certified – Here are our next steps:
        </p>
        <List ordered relaxed style={{ color: 'white' }}>
          <List.Item>
            {`One of our consultants will be in touch shortly (via the email
                  address you provided), and will support your event planning team
                  through the implementation of your chosen actions. Keep in mind that
                  your team can implement more or fewer actions than what you've just
                  selected.`}
          </List.Item>
          <List.Item>
            {`A certification meeting will be arranged to confirm the implementation of your actions.`}
          </List.Item>
          <List.Item>
            {`Your certification can be awarded! We will provide relevant publicity material and share your achievement through our channels. `}
          </List.Item>
        </List>
        <Divider hidden fitted />
        <Link to="/complete">
          <Button onClick={handleSubmit} fluid size="large">
            Send to MSE
          </Button>
        </Link>
        <br />
        <p style={{ textAlign: 'center' }}>
          If you have any questions, comments, or concerns, please contact us at any time at{' '}
          <a className="landing-link" href="mailto:events.sustainability@mcgill.ca">
            events.sustainability@mcgill.ca
          </a>
        </p>
      </Container>
    </Centered>
  );
};

const mapStateToProps = state => {
  return {
    data: state.get('data')
  };
};

export default connect(mapStateToProps)(Submit);
