import React from 'react';
import { Form, DatePicker } from 'antd';

export default function({ field }) {
  return (
    <Form.Item
      label={field.key}
      key={field.key}
      help={field.help_info || ''}
      required={field.required}
    >
      <DatePicker defaultValue={field.placeholder || null}/>
    </Form.Item>
  );
}
