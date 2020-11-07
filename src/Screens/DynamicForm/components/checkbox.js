import React from 'react';
import { Checkbox } from 'antd';

export default function({ field }) {
  return (
      <Checkbox placeholder={field.placeholder || null}/>
  );
}
