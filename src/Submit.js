import React from 'react';
import { Button, Container, Divider, Header, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Centered from './Centered';
import { Link } from 'react-router-dom';
import './Submit.css';
import {
  checkedSelector,
  dataSelector,
  pointsNumeratorSelector,
  pointsDenominatorSelector,
} from './selectors';
import scrollToTop from './ScrollToTop';

const Submit = props => {
  const handleClick = () => {
    const request = new XMLHttpRequest();
    request.open(
      'POST',
      'https://us-central1-mcgill-sustainable-events.cloudfunctions.net/Sheets',
      true,
    );
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(props.data));
  };
  return (
    <Centered>
      <Container text className="submit">
        <Header textAlign="center">{`Let's do it!`}</Header>
        <div className="sub-header">
          We’re excited to get your event certified – Here are our next steps
        </div>
        <List ordered relaxed>
          <List.Item>
            <div className="item-text">
              {`One of our consultants will be in touch shortly (via the email
                  address you provided), and will support your event planning team
                  through the implementation of your chosen actions. Keep in mind that
                  your team can implement more or fewer actions than what you've just
                  selected.`}
            </div>
          </List.Item>
          <List.Item>
            <div className="item-text">
              {`A certification meeting will be arranged to confirm the implementation of your actions.`}
            </div>
          </List.Item>
          <List.Item>
            <div className="item-text">
              {`Your certification can be awarded! We will provide relevant publicity material and share your achievement through our channels. `}
            </div>
          </List.Item>
        </List>
        <Divider hidden fitted />
        <Link to="/complete">
          <Button onClick={handleClick} fluid size="large">
            Send to MSE
          </Button>
        </Link>
        <br />
        <div className="email">
          If you have any questions, comments, or concerns, please contact us at
          any time at{' '}
          <a
            className="landing-link"
            href="mailto:events.sustainability@mcgill.ca"
          >
            events.sustainability@mcgill.ca
          </a>
        </div>
      </Container>
    </Centered>
  );
};

const mapStateToProps = state => ({
  data: dataSelector(state)
    .set('checked', checkedSelector(state).join(', '))
    .set(
      'score',
      `${pointsNumeratorSelector(state)}/${pointsDenominatorSelector(state)}`,
    ),
});

export default scrollToTop(connect(mapStateToProps)(Submit));
