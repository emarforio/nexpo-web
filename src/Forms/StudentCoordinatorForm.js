import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Input,
  Select,
  Checkbox,
  InputNumber,
  Tooltip
} from 'antd';

export default () => {
  const internalOnly = 'Used for internal statistics only.';

  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [swedishSpeaker, setSwedishSpeaker] = useState(false);
  const [age, setAge] = useState(null);

  // FIXME: use api
  const guilds = ['A', 'D', 'E', 'F', 'K', 'M', 'V'];

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      swedish_speaker: swedishSpeaker
    };

    console.info('submit ', data);
  };

  return (
    <div className="apply-student-coordinator">
      <h1>Apply for Student Coordinator</h1>

      <Form onSubmit={onSubmit}>
        <Form.Item label="First name">
          <Input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Last name">
          <Input value={lastName} onChange={e => setlastName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Do you speak Swedish?"
          help="It is assumed that you are able to communicate in English."
        >
          <Checkbox
            checked={swedishSpeaker}
            onChange={e => setSwedishSpeaker(e.target.checked)}
          >
            Yes
          </Checkbox>
        </Form.Item>

        <Form.Item label="Age" help={internalOnly}>
          <InputNumber
            min={15}
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Gender" help={internalOnly}>
          <Select defaultValue="undisclosed">
            <Select.Option value="undisclosed">Prefer not to say</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Guild">
          <Select>
            {guilds.map(g => (
              <Select.Option key={g} value={g}>
                {g}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Checkbox>Master student</Checkbox>
        </Form.Item>

        <Form.Item label="Positions of interest">
          <Select mode="multiple">
            <Select.OptGroup label="Business & Relations">
              <Select.Option value="career_room_coordinator">
                Career Room Coordinator
              </Select.Option>
              <Select.Option value="student_sessions_coordinator">
                Student Sessions Coordinator
              </Select.Option>
            </Select.OptGroup>

            <Select.OptGroup label="Fair & Logistics">
              <Select.Option value="logistics_coordinator">
                Logistics Coordinator
              </Select.Option>
              <Select.Option value="shuttle_service_coordinator">
                Shuttle Service Coordinator
              </Select.Option>
            </Select.OptGroup>
          </Select>

          <Tooltip>
            Read more <a href="https://www.arkadtlth.se/ca/">here</a>.
          </Tooltip>
        </Form.Item>

        <Form.Item label="About you" help="Max 200 characters.">
          <Input.TextArea maxLength={200} />
        </Form.Item>

        <Form.Item
          label="Do you consent to ARKAD handling your personal data?"
          required
        >
          <Checkbox>Yes</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
