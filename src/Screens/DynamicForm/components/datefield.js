import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

export default function({ field, onChange, value }) {
  const momentVal = value ? moment(value) : null;

  return (
    <DatePicker
      value={momentVal}
      onChange={(date, dateStr) => onChange(dateStr)}
      placeholder={field.placeholder || null}
    />
  );
}
