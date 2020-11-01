import React from 'react';
import { Form, Radio } from 'antd';

export default function({ field }) {

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };

  return (
    <Form.Item
      label={field.key}
      key={field.key}
      help={field.help_info || ''}
      value={field.placeholder || ''}
      required={field.required}
    >
       <Radio.Group defaultValue={field.default_value}>
       {field.data.values.map(val => (
        <Radio style={radioStyle} key={val.value} value={val.value} disabled={val.disabled || false}>
          {val.group}
        </Radio>
      ))}
      </Radio.Group>
    </Form.Item>
  );
}
