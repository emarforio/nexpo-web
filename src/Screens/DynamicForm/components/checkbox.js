import React from 'react';
import { Form, Checkbox } from 'antd';

export default function({ field }) {
  return <Checkbox value={field.placeholder || null} />;
}
