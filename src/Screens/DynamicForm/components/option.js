import React from 'react';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

export default function({ field }) {
  const { data } = field;

  return (
    <Select
      defaultValue={field.default_value}
      mode={data.multiple_choice ? 'multiple' : 'default'}
    >
      {data.values.map(val => (
        <Option key={val.value} value={val.value}>
          {val.value}
        </Option>
      ))}
    </Select>
  );
}
