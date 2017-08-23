const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ENABLE_ACTION':
      return {
        ...state,
        actions: {
          ...state.actions,
          [action.id]: { ...state.actions[action.id], applicable: true }
        }
      };
    case 'LOWER_PRIORITY':
      return {
        ...state,
        actions: {
          ...state.actions,
          [action.id]: { ...state.actions[action.id], priority: 1 }
        }
      };
    case 'NEXT_VIEW':
      return { ...state, currentView: state.currentView + 1 };
    case 'SWITCH_ACTION':
      return {
        ...state,
        actions: {
          ...state.actions,
          [action.id]: {
            ...state.actions[action.id],
            checked: !state.actions[action.id].checked
          }
        }
      };
    case 'SET_KV':
      return { ...state, data: { ...state.data, [action.key]: action.value } };
    default:
      return state;
  }
};

export default reducer;
