import React from 'react';
import { Radio } from 'antd';

export default function({ field }) {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };

  return (
    <Radio.Group defaultValue={field.default_value}>
      {field.data.values.map(val => (
        <Radio
          style={radioStyle}
          key={val.value}
          value={val.value}
          disabled={val.disabled || false}
        >
          {val.group}
        </Radio>
      ))}
    </Radio.Group>
  );
}
