import React from 'react';
import { Form, TimePicker } from 'antd';

export default function({ field }) {
  return (
    <TimePicker
      defaultValue={field.placeholder || null}
      minuteStep={5}
      format="HH:mm"
    />
  );
}
