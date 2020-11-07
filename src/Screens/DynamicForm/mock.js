const data = {
  template: {
    title: 'This is the best mock form',
    fields: [
      {
        type: 'TEXTFIELD',
        key: 'Name',
        data: null,
        placeholder: 'Your name',
        help_info: 'It should be on your ID.',
        required: true
      },
      {
        type: 'OPTION',
        key: 'Availability',
        data: {
          multiple_choice: true,
          default_value: null,
          values: [
            {
              group: 'Before lunch',
              value: 'Very early morning'
            },
            {
              group: 'Before lunch',
              value: 'Morning'
            },
            {
              group: 'After lunch',
              value: 'Afternoon'
            },
            {
              group: 'After lunch',
              value: 'Evening'
            }
          ]
        },
        placeholder: 'Favorite time of day',
        help_info: 'When are you like, available?',
        required: false
      },
      {
        type: 'RADIO',
        key: 'Favorite planet',
        data: {
          default_value: null,
          values: [
            { group: 'Mercurius', value: 'Mercurius' },
            { group: 'Venus', value: 'Venus' },
            { group: 'Earth', value: 'Earth' },
            { group: 'Mars', value: 'Mars' },
            { group: 'Jupiter', value: 'Jupiter' },
            { group: 'Saturnus', value: 'Saturnus' },
            { group: 'Uranus', value: 'Uranus' },
            { group: 'Neptune', value: 'Neptune' },
            { group: 'Pluto', value: 'Pluto (sike)', disabled: true }
          ]
        },
        help_info: '',
        required: true
      }
    ],
    submit_text: 'Send',
    agree_to: 'Your information may be used for absolutely nothing.'
  },
  config: {
    deadline: '2020-12-24T14:00:00Z',
    max_responses: null
  }
};

export default async function fetch() {
  const timeout = Math.random() * 2000;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
}
