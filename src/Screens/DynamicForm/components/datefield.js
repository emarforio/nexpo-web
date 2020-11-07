import React from 'react';
import { DatePicker } from 'antd';

export default function({ field }) {
  return (
      <DatePicker placeholder={field.placeholder || null}/>
  );
}
