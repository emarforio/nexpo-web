import React, { useState } from 'react';
import { Row, Col, Input, Icon, Form, Checkbox, Button } from 'antd';

export default function({ hasPlaceholder, onDelete }) {
  const [dataFields, setDataFields] = useState([]);

  const dataFieldsInputs = dataFields.map((k, index) => (
    <Row>
      <Col span={6}>
        <Form.Item label="Group" key={2 * index}>
          <Input />
        </Form.Item>
      </Col>
      <Col span={6} offset={1}>
        <Form.Item label="Value" key={2 * index + 1}>
          <Input />
        </Form.Item>
      </Col>
      <Col>
        <Icon
          type="minus-circle"
          theme="filled"
          style={{ fontSize: '19px', color: '#f30' }}
          onClick={() => deleteDataField(index)}
        /> Remove data field
      </Col>
    </Row>
  ));

  function addDataField() {
    setDataFields([...dataFields, 1]);
  }

  function deleteDataField(index) {
    setDataFields([...dataFields.filter((_, i) => i !== index)]);
  }

  return (
    <div>
      <h4> Option </h4>
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
        <Col>
          <Checkbox> This option has multiple choice. </Checkbox>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item label="Label">
            <Input style={{ width: '100%', marginRight: 8 }} />
          </Form.Item>
        </Col>
        {hasPlaceholder ? (
          <Col span={6} offset={1}>
            <Form.Item label="Placeholder">
              <Input style={{ width: '100%', marginRight: 8 }} />
            </Form.Item>
          </Col>
        ) : (
          <div />
        )}
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item label="Help Info">
            <Input style={{ width: '100%', marginRight: 8 }} />
          </Form.Item>
        </Col>
        <Col span={6} offset={1}>
          <Form.Item label="Default Value">
            <Input style={{ width: '100%', marginRight: 8 }} />
          </Form.Item>
        </Col>
      </Row>
      {dataFieldsInputs}
      <Row>
        <Button type="dashed" onClick={addDataField} style={{ width: '25%' }}>
          <Icon type="plus" /> Add data field
        </Button>
      </Row>
    </div>
  );
}
