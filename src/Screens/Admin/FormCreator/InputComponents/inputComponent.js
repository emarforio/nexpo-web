import React from 'react';

import InputOption from './inputOption';
import InputText from './inputText';
import InputCheckbox from './inputCheckbox';
import InputRadio from './inputRadio';

export default function({ type }) {
  switch (type) {
    case 'INPUTOPTION':
      return <InputOption />;
    case 'INPUTTEXT':
      return <InputText/>;
    case 'INPUTCHECKBOX':
      return <InputCheckbox/>;
    case 'INPUTRADIO':
      return <InputRadio/>;

    default:
      return <div />;
  }
}