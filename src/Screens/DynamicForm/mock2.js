const data = {
    template: {
      title: 'Mock 2',
      fields: [
        {
          type: 'TEXTFIELD',
          key: 'First Name',
          data: null,
          placeholder: false,
          help_info: 'Please enter your first name',
          required: true
        },
        {
          type: 'TEXTFIELD',
          key: 'Last Name',
          data: null,
          placeholder: false,
          help_info: 'Please enter your last name',
          required: true
        },
        {
          type: 'OPTION',
          key: 'option',
          data: {
            multiple_choice: false,
            default_value: 'yes',
            values: [
              {
                group: null,
                value: 'yes'
              },
              {
                group: null,
                value: 'no'
              }
            ]
          },
          placeholder: 'yes',
          help_info: '',
          required: false
        },
        {
            type: 'DATE',
            key: 'Date of Birth',
            data: null,
            placeholder: false,
            help_info: 'Please enter a date',
            required: true
        },
        {
            type:'TIME',
            key: 'Current Time',
            data: null,
            placeholder: false,
            help_info: 'Please enter a date',
            required: false
        },
        {
            type:'NUMBER',
            key: 'Enter your age',
            data: null,
            placeholder: false,
            help_info: 'Please enter a number',
            required: false
        }
      ],
      submit_text: 'Submit',
      agree_to: ''
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