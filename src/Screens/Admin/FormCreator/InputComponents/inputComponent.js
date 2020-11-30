import React from 'react';

import InputOption from './inputOption';
import InputField from './inputField';
import InputRadio from './inputRadio';

export default function({ type, onDelete }) {

  switch (type) {
    case 'OPTION':
      return <InputOption hasPlaceHolder onDelete={onDelete} />;
    case 'TEXTFIELD':
      return <InputField hasPlaceholder header='Textfield' onDelete={onDelete} />;
    case 'CHECKBOX':
      return <InputField header='Checkbox' onDelete={onDelete} />;
    case 'NUMBER':
      return <InputField hasPlaceholder header='Number' onDelete={onDelete} />;
    case 'DATE':
      return <InputField hasPlaceholder header='Date' onDelete={onDelete} />;
    case 'TIME':
      return <InputField hasPlaceholder header='Time' onDelete={onDelete} />;
    case 'EMAIL':
        return <InputField hasPlaceholder header='Email' onDelete={onDelete} />;
    case 'RADIO':
      return <InputRadio hasPlaceholder onDelete={onDelete} />;
    default:
      return <div />;
  }
}