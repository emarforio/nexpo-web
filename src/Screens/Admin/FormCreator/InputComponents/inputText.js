import React from 'react';
import { Row, Col, Input, Icon, Form, Checkbox } from 'antd';

export default function() {
  return (
    <div>
      <h1> Textfield </h1>
        <Icon
            type="minus-circle"
            theme="filled"
            style={{ fontSize: '25px', color: '#f30' }}
        />
        <Row>
        <Col>
          <Checkbox> This field needs to be answered. </Checkbox>       
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item label="Key">
            <Input style={{ width: '100%', marginRight: 8 }} />
          </Form.Item>
        </Col>
        <Col span={6} offset={1}>
          <Form.Item label="Placeholder">
            <Input style={{ width: '100%', marginRight: 8 }} />
          </Form.Item>
        </Col>
      </Row>
      <Row >
        <Col span={6}>
          <Form.Item label="Help Info">
            <Input style={{ width: '100%', marginRight: 8 }} />
          </Form.Item>
        </Col>
        </Row>
    </div>
  );
}
