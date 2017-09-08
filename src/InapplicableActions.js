import React from 'react';
import { connect } from 'react-redux';
import { switchAction, nextView, setKV, viewInapplicableActions } from './actions.js';
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
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Category.css';
import Lorem from './Lorem';
import Action from './Action';
import { actionsSelector } from './selectors';
import InapplicableAction from './InapplicableAction';
import './InapplicableActions.css';

const InapplicableActions = ({
  category,
  inapplicableActions,
  open,
  handleInapplicableActionsClick
}) =>
  inapplicableActions.size > 0 && (
    <Segment onClick={() => handleInapplicableActionsClick(category)}>
      Inapplicable actions
      {open && (
        <div className="inapplicable-actions">
          <Segment.Group>
            {inapplicableActions.map(action => (
              <InapplicableAction key={action.id} action={action} />
            ))}
          </Segment.Group>
        </div>
      )}
    </Segment>
  );

const mapStateToProps = (state, { category }) => ({
  inapplicableActions: actionsSelector(state).filter(
    action => action.category === category && action.learn === false && action.applicable == false
  ),
  open: state.get('inapplicableAction') === category
});

const mapDispatchToProps = {
  handleInapplicableActionsClick: viewInapplicableActions
};

export default connect(mapStateToProps, mapDispatchToProps)(InapplicableActions);
