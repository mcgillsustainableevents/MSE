import React from 'react';
import Centered from './Centered';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchAction, nextView, setKV } from './actions.js';
import {
  Button,
  Image,
  Statistic,
  Header,
  Container,
  Divider,
  Segment,
  Label,
  Checkbox,
  List,
  Grid,
  Item
} from 'semantic-ui-react';
import Logo from './Logo';
import './Landing.css';
import spfLogo from './spf_logo.svg';
import samLogo from './sam_logo.svg';

const Landing = () => (
  <Centered>
    <Container text className="landing">
      <Logo width={500} />
      <p className="landing-info">
        McGill Sustainable Events is an initiative that grew from the{' '}
        <a className="landing-link" href="http://www.mcgill.ca/sustainability">
          McGill Office of Sustainability
        </a>. Our mandate is to provide consultation, training, resources, and certification with
        regards to the sustainability (ecological, social, and economic) of events planned by McGill
        students, staff, and faculty. We can be reached at{' '}
        <a className="landing-link" href="mailto:events.sustainability@mcgill.ca">
          events.sustainability@mcgill.ca
        </a>.
      </p>
      <Item.Group relaxed>
        <Item>
          <Item.Content verticalAlign="middle">
            <Header style={{ color: 'white' }} size="large">
              Learn.
            </Header>
            <p>
              Answer some quick questions and discover the most important actions to take to have
              your event certified.
            </p>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content verticalAlign="middle">
            <Header style={{ color: 'white' }} size="large">
              Implement.
            </Header>
            <p style={{ fontWeight: 300 }}>
              After you’ve applied for certification, our consultant team will be in touch to guide
              you through the implementation process, and arrange your certification meeting (~30
              min).
            </p>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content verticalAlign="middle">
            <Header style={{ color: 'white' }} size="large">
              Get certified.
            </Header>
            <p>
              We know you’ll be proud of your accomplishments, and we want to help you share that
              pride! Following your certification, you will be provided publicity material to
              promote your achievement of bronze, silver, or gold certification.
            </p>
          </Item.Content>
        </Item>
      </Item.Group>
      <Grid stackable>
        <Grid.Column width={8}>
          <Link to={{ pathname: '/questions/1' }}>
            <Button fluid size="massive">Get certified</Button>
          </Link>
        </Grid.Column>
        <Grid.Column width={8}>
          <Link to={{ pathname: '/learn' }}>
            <Button fluid size="massive">
              Learn
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <span className="landing-image-caption">Funded by</span>
          <Image width={200} src={spfLogo} href="http://www.mcgill.ca/sustainability/spf" />
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <span className="landing-image-caption">In partnership with </span>
          <Image width={200} src={samLogo} href="http://www.mcgill.ca/sustainability/spf" />
        </Grid.Column>
      </Grid>
    </Container>
  </Centered>
);

export default Landing;
