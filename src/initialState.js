import { OrderedMap, Record, Map } from 'immutable';

const Action = Record({
  id: null,
  title: null,
  info: null,
  checked: false,
  applicable: true,
  time: null,
  priority: null,
  points: 0,
  bonus: 0,
  category: null,
  onlyLearn: false
}, 'Action')


const actions = OrderedMap({
  0: Action({
    id: '0',
    title: 'Work with socially responsible sponsors',
    info: '',
    time: 'HIGH',
    priority: 'MED',
    category: 'Planning Phase',
    points: 1
  }),
  1: Action({
    id: '1',
    title: 'Ensure that event location is barrier free',
    info: '',
    time: 'MED',
    priority: 'MED',
    category: 'Planning Phase',
    applicable: false,
    points: 1
  }),
  2: Action({
    id: '2',
    title: 'Perform a land acknowledgement',
    info: '',
    time: 'LOW',
    priority: 'MED',
    category: 'Equity',
    points: 1
  })
});

const initialState = Map({
  actions,
  selectedAction: null,
  data: Map()
});

export default initialState;
