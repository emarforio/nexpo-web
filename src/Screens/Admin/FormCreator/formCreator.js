import React, { useState } from 'react';
import { Icon, Row, Col, Input, Select, Form, Button } from 'antd';
import InputComponent from './InputComponents/inputComponent';

const { Option, OptGroup } = Select;

export default function() {
  const [keys, setKeys] = useState([]);
  const [newInput, setNewInput] = useState('');

  const formItems = keys.map((k, index) => (
    <Form.Item required={false} key={index}>
      <Row>
        <InputComponent type={k.type} onDelete={() => deleteComponent(index)} />
      </Row>
    </Form.Item>
  ));

  function addComponent() {
    setKeys([
      ...keys,
      {
        type: newInput
      }
    ]);
  }

  function deleteComponent(index) {
    setKeys([
      ...keys.filter((_, i) => i !== index)
    ]);
  }

  return (
    <div>
      <Form>
        <Row gutter={[0, 24]}>
          <Col span={6}>
            <Form.Item label="Title">
              <Input placeholder="Please input the title of the form here." />
            </Form.Item>
          </Col>
        </Row>
        {formItems}
        <Row>
          <Col span={4}>
            <Form.Item required={false}>
              <Select
                placeholder="Choose a component to add"
                style={{ width: '100%' }}
                onChange={setNewInput}
              >
                <Option value="TEXTFIELD">Textfield</Option>
                <Option value="CHECKBOX">Checkbox</Option>
                <Option value="OPTION">Option</Option>
                <Option value="RADIO">Radio</Option>
                <Option value="EMAIL"> Email </Option>
                <Option value="NUMBER"> Number </Option>
                <Option value="DATE"> Date </Option>
                <Option value="TIME"> Time </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item>
              <Button
                type="default"
                style={{ width: '100%' }}
                disabled={newInput === ''}
                onClick={addComponent}
              >
                <Icon type="plus" /> Add component
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
}
