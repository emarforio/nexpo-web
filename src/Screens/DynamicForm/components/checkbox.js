import React from 'react';
import { Checkbox } from 'antd';

export default function({ field, onChange, value }) {
  return (
    <Checkbox
      value={value}
      onChange={e => onChange(e.target.checked)}
      placeholder={field.placeholder || null}
    />
  );
}
