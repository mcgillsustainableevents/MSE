import React from 'react';
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
  Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Category.css';
import Lorem from './Lorem';
import LearnAction from './LearnAction';
import { actionsSelector } from './selectors';
import Category from './Category';

const LearnCategory = ({category, actions}) => (
  <div className="category">
    <h1 className="category-header">{category}</h1>
    <Segment.Group>
      {actions.map(action => <LearnAction key={action.id} action={action} />)}
    </Segment.Group>
  </div>
);

const mapStateToProps = (state, { category }) => ({
  actions: actionsSelector(state).filter(action => action.category === category)
});

export default connect(mapStateToProps)(LearnCategory);
