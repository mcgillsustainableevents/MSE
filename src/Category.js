import React from 'react';
import { Segment } from 'semantic-ui-react';
import './Category.css';
import Action from './Action';
import InapplicableActions from './InapplicableActions';

const Category = ({ category, actions }) => (
  <div className="category">
    <h1 className="category-header">{category}</h1>
    <Segment.Group>
      {actions
        .filter(action => action.applicable)
        .valueSeq()
        .map(action => <Action key={action.id} action={action} />)}
      <InapplicableActions category={category} />
    </Segment.Group>
  </div>
);

export default Category;
