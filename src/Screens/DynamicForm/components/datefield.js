import React from 'react';
import { Form, DatePicker } from 'antd';

export default function({ field }) {
  return <DatePicker defaultValue={field.placeholder || null} />;
}
