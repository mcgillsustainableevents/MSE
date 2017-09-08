export const enableAction = id => ({ type: 'ENABLE_ACTION', id });

export const nextView = () => ({ type: 'NEXT_VIEW' });

export const checkAction = id => ({ type: 'CHECK_ACTION', id });

export const setKV = (key, value) => ({ type: 'SET_KV', key, value });

export const lowerPriority = id => ({ type: 'LOWER_PRIORITY', id });

export const viewAction = id => ({ type: 'VIEW_ACTION', id });

export const viewInapplicableActions = category => ({
  type: 'VIEW_INAPPLICABLE_ACTIONS',
  category
});
