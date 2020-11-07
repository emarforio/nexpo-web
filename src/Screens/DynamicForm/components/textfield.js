import React from 'react';
import { Input } from 'antd';

export default function({ field, onChange, value }) {
  return (
    <Input.TextArea
      placeholder={field.placeholder || ''}
      maxLength={200}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
