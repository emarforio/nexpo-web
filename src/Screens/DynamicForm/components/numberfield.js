import React from 'react';
import { Form, InputNumber } from 'antd';


export default function({ field }) {
  return (
             <Form.Item
                label={field.key}
                key={field.key}
                help={field.help_info || ''}
                required={field.required}
             >
                      <InputNumber value={field.placeholder || null}/>
            </Form.Item>
  )};