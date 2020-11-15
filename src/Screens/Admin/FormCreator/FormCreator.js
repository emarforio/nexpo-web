import React, { useState } from 'react';
import { Icon, Row, Col, Input, Select, Form, Button } from 'antd';

const { Option, OptGroup } = Select;

export default function() {
  const [keys, setKeys] = useState([]);

  const formItems = keys.map((k, index) => (
    <Form.Item required={false} key={index}>
      <Row type="flex" justify='start' align='middle'>
        <Col span={6}>
          <Input placeholder="Please input the label text of the field" style={{ width: '90%', marginRight: 8 }}  />
        </Col>
        <Col>
          <Icon
            type="minus-circle"
            theme="outlined"
            style={{ fontSize: '25px'}}
          />
        </Col>
      </Row>
    </Form.Item>
  ));

  function addComponent() {
    setKeys([...keys, keys.length]);
  }

  return (
    <div>
      <Form>
        <Row gutter={[0, 24]}>
          <Col span={6}>
            <Input placeholder="Please input the title of the form here." />
          </Col>
        </Row>
        {formItems}
        <Row>
          <Col span={4}>
            <Form.Item required={false}>
              <Select
                placeholder="Choose a component to add"
                style={{ width: '100%' }}
              >
                <Option value="textfield">Textfield</Option>
                <Option value="checkbox">Checkbox</Option>
                <Option value="option ">Option</Option>
                <Option value="radio">Radio</Option>
                <Option value="email">Email</Option>
                <Option value="number">Number</Option>
                <Option value="date">Date</Option>
                <Option value="time">Time</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item>
              <Button
                type="dashed"
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
