import React from 'react';

import InputOption from './inputOption';
import InputField from './inputField';
import InputRadio from './inputRadio';

export default function({ type }) {


  switch (type) {
    case 'OPTION':
      return <InputOption />;
    case 'TEXTFIELD':
      return <InputField hasPlaceholder header='Textfield'/>;
    case 'CHECKBOX':
      return <InputField header='Checkbox'/>;
    case 'NUMBER':
      return <InputField hasPlaceholder header='Number'/>;
    case 'DATE':
      return <InputField hasPlaceholder header='Date'/>;
    case 'TIME':
      return <InputField hasPlaceholder header='Time'/>;
    case 'EMAIL':
        return <InputField hasPlaceholder header='Email'/>;
    case 'RADIO':
      return <InputRadio />;
    default:
      return <div />;
  }
}