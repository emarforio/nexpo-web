import React, { useState } from 'react';
import { Icon, Row, Col, Input, Select, Form, Button } from 'antd';
import InputComponent from './InputComponents/inputComponent';

const { Option, OptGroup } = Select;

export default function() {
  const [keys, setKeys] = useState([]);
  const [newInput, setNewInput] = useState('');

  const formItems = keys.map((k, index) => (
    <Form.Item required={false} key={index}>
      <Row type="flex" justify="start" align="middle">
        <InputComponent type={k.type} />
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
                <Option value="INPUTTEXT">Textfield</Option>
                <Option value="INPUTCHECKBOX">Checkbox</Option>
                <Option value="INPUTOPTION ">Option</Option>
                <Option value="INPUTRADIO">Radio</Option>
                <Option value="INPUTEMAIL"> Email </Option>
                <Option value="INPUTNUMBER"> Number </Option>
                <Option value="INPUTDATE"> Date </Option>
                <Option value="INPUTTIME"> Time </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item>
              <Button
                type="default"
                style={{ width: '100%' }}
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
