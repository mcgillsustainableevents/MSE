import { createSelector } from 'reselect';

export const actionsSelector = state => state.get('actions');

export const pointsNumeratorSelector = createSelector(actionsSelector, actions =>
  actions.reduce((total, action) => total + (action.checked ? action.points + action.bonus : 0), 0)
);

export const pointsDenominatorSelector = createSelector(actionsSelector, actions =>
  actions.reduce((total, action) => total + (action.applicable ? action.points : 0), 0)
);

export const dataSelector = state => state.get('data');

export const checkedSelector = createSelector(actionsSelector, actions =>
  actions
    .filter(action => action.checked)
    .map(action => action.id)
    .toList()
);
