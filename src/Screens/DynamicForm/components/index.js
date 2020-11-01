import React from 'react';

import Option from './option';
import TextField from './textfield';
import DateField from './datefield';
import NumberField from './numberfield';
import TimeField from './timefield';
import Checkbox from './checkbox';
import Radio from './radio';

export default function({ field }) {
  switch (field.type) {
    case 'OPTION':
      return <Option field={field} />;
    case 'TEXTFIELD':
      return <TextField field={field}/>;
    case 'EMAIL':
      return <TextField field={field}/>;
    case 'NUMBER':
      return <NumberField field={field}/>;
    case 'DATE':
      return <DateField field={field}/>;
    case 'TIME':
      return <TimeField field={field}/>;
    case 'CHECKBOX':
      return <Checkbox field={field}/>;
    case 'RADIO':
      return <Radio field={field} />;

    default:
      return <div />;
  }
}
