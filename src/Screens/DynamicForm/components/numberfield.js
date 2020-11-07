import React from 'react';
import { InputNumber } from 'antd';

export default function({ field, onChange, value }) {
  return (
    <InputNumber
      value={value}
      onChange={onChange}
      placeholder={field.placeholder || null}
    />
  );
}
