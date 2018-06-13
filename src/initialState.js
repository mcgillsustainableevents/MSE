import { OrderedMap, Record, Map } from 'immutable';
import copy from './copy.js';

const Action = Record(
  {
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
    learn: false,
  },
  'Action',
);

let actions = OrderedMap();

const addAction = (id, options) => {
  actions = actions.set(
    id,
    Action({
      id,
      info: copy[id],
      ...options,
    }),
  );
};

addAction(1, {
  title: 'Work with socially responsible sponsors and partners',
  time: 'HIGH',
  category: 'Early Planning Phase',
  points: 1,
  applicable: false,
});

addAction(2, {
  title: 'Integrate diversity into recruitment strategy',
  time: 'MED',
  category: 'Early Planning Phase',
  points: 1,
});

addAction(3, {
  title: 'Purchase carbon offsets/onsets',
  time: 'LOW',
  category: 'Early Planning Phase',
  points: 2,
});

addAction(4, {
  title: 'Publicize event accessibility accommodations',
  time: 'LOW',
  category: 'Early Planning Phase',
  points: 1,
});

addAction(5, {
  title: 'Hold your event at an accessible time',
  time: 'LOW',
  category: 'Early Planning Phase',
  points: 1,
});

addAction(6, {
  title: 'Offer a flexible and accessible pricing model',
  time: 'LOW',
  category: 'Early Planning Phase',
  points: 1,
  applicable: false,
});
addAction(7, {
  title: 'Implement Universal Design principles for presentations',
  time: 'HIGH',
  category: 'Early Planning Phase',
  points: 1,
});
addAction(8, {
  title:
    'Ensure implementation of fair labour practices for employees and volunteers',
  time: 'LOW',
  category: 'Early Planning Phase',
  bonus: 1,
});
addAction(9, {
  title: 'Engage a team to implement sustainability related actions',
  time: 'HIGH',
  category: 'Early Planning Phase',
  points: 1,
});
addAction(10, {
  title: 'Create a sustainability vision for the event',
  category: 'Early Planning Phase',
  learn: true,
});
addAction(11, {
  title: 'Ensure that event location has as few physical barriers as possible',
  time: 'MED',
  category: 'Location',
  points: 1,
});
addAction(12, {
  title:
    'Ensure that event location is easily accessible via public transportation',
  time: 'MED',
  category: 'Location',
  points: 1,
});
addAction(13, {
  title: 'Hold event in a sustainably-designed building',
  time: 'MED',
  category: 'Location',
  bonus: 1,
});
addAction(14, {
  title: 'Hold your event at a McGill Location',
  category: 'Location',
  learn: true,
});
addAction(15, {
  title:
    'Provide and collect information about alternative and accessible transport for participants ',
  time: 'MED',
  category: 'Travel and Transport',
  points: 1,
});
addAction(16, {
  title: 'Record event or provide an event recap',
  time: 'HIGH',
  category: 'Travel and Transport',
  points: 1,
});
addAction(17, {
  title: 'Allow participation via teleconference',
  time: 'MED',
  category: 'Travel and Transport',
  points: 1,
});
addAction(18, {
  title: 'Perform a land acknowledgement',
  time: 'LOW',
  category: 'Equity',
  points: 1,
});
addAction(19, {
  title: 'Include a diversity of voices in your event programming',
  time: 'HIGH',
  category: 'Equity',
  points: 1,
});
addAction(20, {
  title:
    'Set community ground-rules, and provide an opportunity to share pronouns and access needs',
  time: 'LOW',
  category: 'Equity',
  points: 1,
  applicable: false,
});
addAction(21, {
  title:
    'Encourage attendance and engagement for traditionally marginalized participants',
  time: 'MED',
  category: 'Equity',
  points: 1,
});
addAction(22, {
  title:
    'Offer access to gender-neutral (single stall), and parent-friendly washrooms on site ',
  time: 'LOW',
  category: 'Equity',
  points: 1,
});
addAction(23, {
  title: 'Provide electronic documents in an accessible format',
  time: 'MED',
  category: 'Equity',
  points: 1,
});
addAction(24, {
  title:
    'Educate presenters/facilitators on interaction with diverse communities',
  time: 'HIGH',
  category: 'Equity',
  bonus: 1,
  applicable: false,
});
addAction(25, {
  title: 'Integrate health breaks into long events',
  category: 'Equity',
  learn: true,
});
addAction(26, {
  title: 'Work with locally based suppliers and services',
  time: 'LOW',
  category: 'Procurement',
  points: 1,
  applicable: false,
});
addAction(27, {
  title:
    'Ensure that suppliers are committed to sustainability and compliant with McGill’s Supplier Code of Conduct',
  time: 'LOW',
  category: 'Procurement',
  points: 1,
  applicable: false,
});
addAction(28, {
  title: 'Choose event suppliers that are social economy initiatives',
  time: 'MED',
  category: 'Procurement',
  bonus: 1,
  applicable: false,
});
addAction(29, {
  title:
    'Any event paid by McGill operating funds must use a McGill-approved catering service.',
  category: 'Procurement',
  learn: true,
});
addAction(30, {
  title: 'Provide vegetarian/vegan food and beverage options',
  time: 'LOW',
  category: 'Food',
  points: 2,
  applicable: false,
});
addAction(31, {
  title:
    'Ask about, accommodate, and communicate dietary restrictions. If alcohol is served, offer non-alcoholic alternatives',
  time: 'MED',
  category: 'Food',
  points: 2,
  applicable: false,
});
addAction(32, {
  title: 'Provide reusable/recyclable dishware rather than disposable ones',
  time: 'HIGH',
  category: 'Food',
  points: 1,
  applicable: false,
});
addAction(33, {
  title: 'Reduce food packaging waste',
  time: 'MED',
  category: 'Food',
  points: 1,
  applicable: false,
});
addAction(34, {
  title: 'Provide fair-trade and/or organic food and beverage options',
  time: 'LOW',
  category: 'Food',
  points: 1,
  applicable: false,
});
addAction(35, {
  title: 'Make provisions for the potential of surplus food',
  time: 'LOW',
  category: 'Food',
  points: 1,
  applicable: false,
});
addAction(36, {
  title: 'Ensure your event’s food and beverage menu is nutritionally complete',
  category: 'Food',
  learn: true,
});
addAction(37, {
  title:
    'Provide waste management facilities during event, and communicate about them',
  time: 'HIGH',
  category: 'Waste',
  points: 2,
});
addAction(38, {
  title: 'Reduce distributed event material waste',
  time: 'LOW',
  category: 'Waste',
  points: 2,
  applicable: false,
});
addAction(39, {
  title: 'Engage waste educators at event',
  time: 'MED',
  category: 'Waste',
  bonus: 1,
});
addAction(40, {
  title: 'Adhere to McGill Paper Policy standards',
  time: 'LOW',
  category: 'Waste',
  points: 1,
  applicable: false,
});
addAction(41, {
  title: 'Publicize information related to the sustainability of event',
  time: 'LOW',
  category: 'Communication',
  points: 1,
});
addAction(42, {
  title: 'Collect participant and stakeholder feedback',
  time: 'MED',
  category: 'Communication',
  points: 1,
});
addAction(43, {
  title: 'Ensure your event’s food and beverage menu is nutritionally complete',
  category: 'Communication',
  learn: true,
});
addAction(44, {
  title: 'Share failures in addition to successes of the event.',
  category: 'Communication',
  learn: true,
});
addAction(45, {
  title:
    'Ensure all communications are in both English and French (and other languages when appropriate).',
  category: 'Communication',
  learn: true,
});
addAction(46, {
  title:
    'Encourage presenters and participants to contribute to making events sustainable',
  category: 'Communication',
  learn: true,
});
addAction(47, {
  title: 'Provide access to a quiet room for extremely long events',
  category: 'Equity',
  learn: true,
});
addAction(48, {
          title: 'Comply with McGill’s single-use water bottle ban',
          category: 'Food',
          learn: false,
          });

const initialState = Map({
  actions,
  selectedAction: null,
  selectedLearnAction: null,
  data: Map(),
  inapplicableAction: null,
});

export default initialState;
