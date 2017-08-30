import { Map } from 'immutable';

const reducer = (state, action) => {
  switch (action.type) {
    case 'VIEW_ACTION':
      if (state.get('selectedAction') === action.id) {
        return state.set('selectedAction', null);
      }
      return state.set('selectedAction', action.id);
    case 'CHECK_ACTION':
      return state.updateIn(['actions', action.id, 'checked'], value => !value);
    case 'SET_KV':
      return state.setIn(['data', action.key], action.value);
    default:
      return state;
  }
};

export default reducer;
