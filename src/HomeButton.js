import React from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router';

const HomeButton = ({ history, fluid }) => (
  <Button fluid={fluid} onClick={() => history.replace('/')}>
    Return to home page
  </Button>
);

export default withRouter(HomeButton);
