import React from 'react';
import { InputNumber } from 'antd';

export default function({ field }) {
  return (
      <InputNumber placeholder={field.placeholder || null} />
  );
}
