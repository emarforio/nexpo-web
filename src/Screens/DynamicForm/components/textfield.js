import React from 'react';
import { Form, Input } from 'antd';

export default function({ field }) {
  return (
    <Input.TextArea placeholder={field.placeholder || ''} maxLength={200} />
  );
}
