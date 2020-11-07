import React from 'react';
import { Radio } from 'antd';

export default function({ field, onChange, value }) {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };

  return (
    <Radio.Group
      defaultValue={field.default_value}
      onChange={e => onChange(e.target.value)}
      value={value}
    >
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
