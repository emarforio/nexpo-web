import React from 'react';
import { Form, Input } from 'antd';

export default function({ field }) {
  return (
    <Form.Item
      label={field.key}
      key={field.key}
      help={field.help_info || ''}
      required={field.required}
    >
      <Input.TextArea value={field.placeholder || ''} maxLength={200}/>
    </Form.Item>
  );
}
