import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

export default function({ field, onChange, value }) {
  // The time picker expects a date object but we only care
  // about the simple string representations. To parse the time
  // during component creation, pad it with some arbitrary date.
  // ...
  // If it's stupid and it works, it's not stupid.

  const someDate = '2020-01-01'; // Let's hope for a good year!!
  const momentVal = value ? moment(`${someDate} ${value}`) : null;

  return (
    <TimePicker
      placeholder={field.placeholder || null}
      minuteStep={5}
      format="HH:mm"
      value={momentVal}
      onChange={(date, timeStr) => onChange(timeStr)}
    />
  );
}
