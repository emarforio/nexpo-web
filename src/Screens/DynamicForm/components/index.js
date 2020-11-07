import React from 'react';

import Option from './option';
import TextField from './textfield';
import DateField from './datefield';
import NumberField from './numberfield';
import TimeField from './timefield';
import Checkbox from './checkbox';
import Radio from './radio';

export default function({ field, onChange }) {
  switch (field.type) {
    case 'OPTION':
      return <Option field={field} onChange={onChange} />;
    case 'TEXTFIELD':
      return <TextField field={field} onChange={onChange} />;
    case 'EMAIL':
      return <TextField field={field} onChange={onChange} />;
    case 'NUMBER':
      return <NumberField field={field} onChange={onChange} />;
    case 'DATE':
      return <DateField field={field} onChange={onChange} />;
    case 'TIME':
      return <TimeField field={field} onChange={onChange} />;
    case 'CHECKBOX':
      return <Checkbox field={field} onChange={onChange} />;
    case 'RADIO':
      return <Radio field={field} onChange={onChange} />;

    default:
      return <div />;
  }
}
