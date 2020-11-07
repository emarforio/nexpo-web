import React from 'react';

import Option from './option';
import TextField from './textfield';
import DateField from './datefield';
import NumberField from './numberfield';
import TimeField from './timefield';
import Checkbox from './checkbox';
import Radio from './radio';

export default function({ field, onChange, value }) {
  switch (field.type) {
    case 'OPTION':
      return <Option field={field} value={value} onChange={onChange} />;
    case 'TEXTFIELD':
      return <TextField field={field} value={value} onChange={onChange} />;
    case 'EMAIL':
      return <TextField field={field} value={value} onChange={onChange} />;
    case 'NUMBER':
      return <NumberField field={field} value={value} onChange={onChange} />;
    case 'DATE':
      return <DateField field={field} value={value} onChange={onChange} />;
    case 'TIME':
      return <TimeField field={field} value={value} onChange={onChange} />;
    case 'CHECKBOX':
      return <Checkbox field={field} value={value} onChange={onChange} />;
    case 'RADIO':
      return <Radio field={field} value={value} onChange={onChange} />;

    default:
      return <div />;
  }
}
