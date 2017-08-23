export const enableAction = id => ({ type: 'ENABLE_ACTION', id });

export const nextView = () => ({ type: 'NEXT_VIEW' });

export const switchAction = id => ({ type: 'SWITCH_ACTION', id });

export const setKV = (key, value) => ({ type: 'SET_KV', key, value });

export const lowerPriority = id => ({ type: 'LOWER_PRIORITY', id });
