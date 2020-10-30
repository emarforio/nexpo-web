const data = {
  template: {
    title: 'This is the best mock form',
    fields: [
      {
        type: 'TEXTFIELD',
        key: 'name',
        data: null,
        placeholder: 'Your name',
        help_info: 'It should be on your ID.',
        required: true
      },
      {
        type: 'OPTION',
        key: 'availability',
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
        placeholder: '',
        help_info: 'When are you like, available?',
        required: false
      },
      {
        type: 'RADIO',
        key: 'Favorite planet',
        data: {
          default_value: null,
          values: [
            { value: 'Mercurius' },
            { value: 'Venus' },
            { value: 'Earth' },
            { value: 'Mars' },
            { value: 'Jupiter' },
            { value: 'Saturnus' },
            { value: 'Uranus' },
            { value: 'Neptune' },
            { value: 'Pluto (sike)', disabled: true }
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
