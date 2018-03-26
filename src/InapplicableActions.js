import React from 'react';
import { connect } from 'react-redux';
import { viewInapplicableActions } from './actions.js';
import { Segment } from 'semantic-ui-react';
import './Category.css';
import { actionsSelector } from './selectors';
import InapplicableAction from './InapplicableAction';
import './InapplicableActions.css';

const InapplicableActions = ({
  category,
  inapplicableActions,
  open,
  handleInapplicableActionsClick,
}) =>
  inapplicableActions.size > 0 && (
    <Segment onClick={() => handleInapplicableActionsClick(category)}>
      <span className="title">Inapplicable actions</span>
      {open && (
        <div className="inapplicable-actions">
          <Segment.Group>
            {inapplicableActions
              .valueSeq()
              .map(action => (
                <InapplicableAction key={action.id} action={action} />
              ))}
          </Segment.Group>
        </div>
      )}
    </Segment>
  );

const mapStateToProps = (state, { category }) => ({
  inapplicableActions: actionsSelector(state).filter(
    action =>
      action.category === category &&
      action.learn === false &&
      action.applicable === false,
  ),
  open: state.get('inapplicableAction') === category,
});

const mapDispatchToProps = {
  handleInapplicableActionsClick: viewInapplicableActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  InapplicableActions,
);
