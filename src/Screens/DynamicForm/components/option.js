import React from 'react';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

export default function({ field, onChange, value }) {
  const { data } = field;

  return (
    <Select
      defaultValue={field.default_value}
      mode={data.multiple_choice ? 'multiple' : 'default'}
      placeholder={field.placeholder}
      value={value}
      onChange={onChange}
    >
      {data.values.map(val => (
        <Option key={val.value} value={val.value}>
          {val.value}
        </Option>
      ))}
    </Select>
  );
}
