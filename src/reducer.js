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
    case 'VIEW_INAPPLICABLE_ACTIONS':
    if (state.get('inapplicableAction') === action.category) {
      return state.set('inapplicableAction', null);
    }
    return state.set('inapplicableAction', action.category);
    default:
      return state;
  }
};

export default reducer;
