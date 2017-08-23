const initialState = {
  actions: {
    1: {
      id: 1,
      action: 'Work with socially responsible sponsors',
      info: '',
      checked: false,
      applicable: false,
      time: 'HIGH',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    2: {
      id: 2,
      action: 'Integrate diversity into your recruitment strategy',
      info: '',
      checked: false,
      applicable: true,
      time: 'MED',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    3: {
      id: 3,
      action: 'Purchase carbon offsets/onsets',
      info: '',
      checked: false,
      applicable: true,
      time: 'LOW',
      priority: 0,
      points: { numerator: 2, denominator: 2 }
    },
    4: {
      id: 4,
      action: 'Publicize event accessibility accommodations',
      info: '',
      checked: false,
      applicable: true,
      time: 'LOW',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    5: {
      id: 5,
      action: 'Hold your event at an accessible time',
      info: '',
      checked: false,
      applicable: true,
      time: 'LOW',
      priority: 0,
      points: { numerator: 2, denominator: 2 }
    },
    6: {
      id: 6,
      action: 'Offer a flexible and accesible pricing model',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    7: {
      id: 7,
      action: 'Implement universal design principles',
      info: '',
      checked: false,
      applicable: true,
      time: 'HIGH',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    8: {
      id: 8,
      action:
      'Engage a team to implement sustainability related actions',
      info: '',
      checked: false,
      applicable: true,
      time: 'HIGH',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    9: {
      id: 9,
      action: 'Ensure implemenation of fair labour practices',
      info: '',
      checked: false,
      applicable: true,
      time: 'LOW',

      priority: 0,
      points: { numerator: 1, denominator: 0 }
    },
    10: {
      id: 10,
      action: 'Ensure that event location is barrier free',
      info: '',
      checked: false,
      applicable: true,
      time: 'MED',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    11: {
      id: 11,
      action:
      'Ensure that your event location is easily accessible via public transportation.',
      info: '',
      checked: false,
      applicable: true,
      time: 'MED',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    12: {
      id: 12,
      action: 'Hold your event in a sustainably-designed building',
      info: '',
      checked: false,
      applicable: true,
      time: 'MED',

      priority: 0,
      points: { numerator: 1, denominator: 0 }
    },
    13: {
      id: 13,
      action:
      'Provide and collect information about alternative and accessible transport for participants',
      info: '',
      checked: false,
      applicable: true,
      time: 'MED',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    14: {
      id: 14,
      action: 'Record your event or provide an event recap',
      info: '',
      checked: false,
      applicable: true,
      time: 'HIGH',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    15: {
      id: 15,
      action: 'Allow participation via teleconference',
      info: '',
      checked: false,
      applicable: true,
      time: 'MED',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    16: {
      id: 16,
      action: 'Perform a land acknowledgement',
      info: '',
      checked: false,
      applicable: true,
      time: 'LOW',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    17: {
      id: 17,
      action: 'Include voices of diverse populations in your event programming',
      info: '',
      checked: false,
      applicable: true,
      time: 'HIGH',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    18: {
      id: 18,
      action:
      'Set community ground-rules, and provide an opportunity to share preferred pronouns',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    19: {
      id: 19,
      action:
      'Encourage attendence among diverse and underrepresented populations',
      info: '',
      checked: false,
      applicable: true,
      time: 'MED',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    20: {
      id: 20,
      action:
      'Offer access to gender-neutral (single stall), and parent-friendly washrooms on site',
      info: '',
      checked: false,
      applicable: true,
      time: 'LOW',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    21: {
      id: 21,
      action:
      'Educate presenters/facilitators on interaction with diverse populations',
      info: '',
      checked: false,
      applicable: false,
      time: 'HIGH',
      priority: 0,
      points: { numerator: 1, denominator: 0 }
    },
    22: {
      id: 22,
      action: 'Work with locally based suppliers and services',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    23: {
      id: 23,
      action:
      'Ensure that suppliers are committed to sustainability and compliant with McGill’s Supplier Code of Conduct',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',
      priority: 0,
      points: { numerator: 2, denominator: 2 }
    },
    24: {
      id: 24,
      action: 'Choose event suppliers that are social economy initiatives',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',

      priority: 0,
      points: { numerator: 1, denominator: 0 }
    },
    25: {
      id: 25,
      action: 'Provide vegetarian/vegan food and beverage options.',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',

      priority: 0,
      points: { numerator: 2, denominator: 2 }
    },
    27: {
      id: 27,
      action:
      'Provide reusable/recyclable dishware rather than disposable ones.',
      info: '',
      checked: false,
      applicable: false,
      time: 'HIGH',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    26: {
      id: 26,
      action:
      'Ask about, accomodate, and communicate dietary restrictions. If alcohol is served, offer non-alcoholic alternatives.',
      info: '',
      checked: false,
      applicable: false,
      time: 'MED',

      priority: 0,
      points: { numerator: 2, denominator: 2 }
    },
    28: {
      id: 28,
      action: 'Reduce food packaging waste',
      info: '',
      checked: false,
      applicable: false,
      time: 'MED',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    29: {
      id: 29,
      action: 'Provide organic and/or fair-trade food and beverage options.',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    30: {
      id: 30,
      action: 'Make provisions for the potential of surplus food',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    31: {
      id: 31,
      action:
      'Provide waste management facilities during your event, and communicate about them.',
      info: '',
      checked: false,
      applicable: true,
      time: 'HIGH',

      priority: 0,
      points: { numerator: 2, denominator: 2 }
    },
    34: {
      id: 34,
      action: 'Engage waste educators at event',
      info: '',
      checked: false,
      applicable: true,
      time: 'MED',

      priority: 0,
      points: { numerator: 1, denominator: 0 }
    },
    33: {
      id: 33,
      action: 'Adhere to McGill Paper Policy standards',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    32: {
      id: 32,
      action: 'Reduce distributed event material waste',
      info: '',
      checked: false,
      applicable: false,
      time: 'LOW',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    37: {
      id: 37,
      action: 'Publicize information related to the sustainability of your event',
      info: '',
      checked: false,
      applicable: true,
      time: 'LOW',

      priority: 0,
      points: { numerator: 1, denominator: 1 }
    },
    38: {
      id: 38,
      action: 'Collect participant and stakeholder feedback',
      info: '',
      checked: false,
      applicable: true,
      time: 'MED',
      priority: 0,
      points: { numerator: 1, denominator: 1 }
    }
  },
  categories: [
    { category: 'Planning Phase', start: 1, end: 9 },
    { category: 'Location', start: 10, end: 12 },
    { category: 'Travel and Transport', start: 13, end: 15 },
    { category: 'Equity', start: 16, end: 21 },
    { category: 'Procurement', start: 22, end: 24 },
    { category: 'Food', start: 25, end: 30 },
    { category: 'Waste', start: 31, end: 34 },
    { category: 'Communication', start: 37, end: 38 }
  ],
  currentView: 0,
  totalQuestions: 12
};

export default initialState;
