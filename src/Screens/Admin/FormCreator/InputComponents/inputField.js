import React from 'react';
import { Row, Col, Input, Icon, Form, Checkbox } from 'antd';

export default function({ hasPlaceholder, header, onDelete }) {
  return (
    <div>
      <h4> {header} </h4>
        <Icon
            type="minus-circle"
            theme="filled"
            style={{ fontSize: '19px', color: '#f30' }}
            onClick={onDelete}
        /> Remove component
        <Row>
        <Col>
          <Checkbox> This field needs to be answered. </Checkbox>       
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item label="Label">
            <Input style={{ width: '100%', marginRight: 8 }} />
          </Form.Item>
        </Col>
        { hasPlaceholder ? <Col span={6} offset={1}>
          <Form.Item label="Placeholder">
            <Input style={{ width: '100%', marginRight: 8 }} />
          </Form.Item>
        </Col> : <div/>} 
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
