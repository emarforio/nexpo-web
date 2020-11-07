import React from 'react';
import { Form, InputNumber } from 'antd';

export default function({ field }) {
  return <InputNumber value={field.placeholder || null} />;
}
