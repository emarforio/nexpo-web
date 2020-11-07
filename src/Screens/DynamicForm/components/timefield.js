import React from 'react';
import { TimePicker } from 'antd';

export default function({ field }) {
  return (
    <TimePicker
      placeholder={field.placeholder || null}
      minuteStep={5}
      format="HH:mm"
    />
  );
}
