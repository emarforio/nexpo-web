import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Checkbox } from 'antd';

import Spinner from '../../Components/LoadingSpinner';
import Error from '../../Components/ErrorMessage';

import FieldComponent from './components';

import fetchForm from './mock.js';

export default function() {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [form, setForm] = useState(null);
  const [response, setResponse] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        // TODO: Actual data fetching
        setForm(await fetchForm());
      } catch (e) {
        // TODO: Handle errors more gracefully
        setError(true);
      } finally {
        setFetching(false);
      }
    }

    fetchData();
  }, [id]);

  if (fetching) {
    return <Spinner />;
  }

  if (error !== null) {
    return <Error message="Failed to fetch form" />;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function setKey(key, value) {
    setResponse({
      ...response,
      [key]: value
    });
  }

  return (
    <div>
      <h2>{form.template.title}</h2>
      <Form onSubmit={e => handleSubmit(e)}>
        {form.template.fields.map(field => (
          <Form.Item
            key={field.key}
            label={field.key}
            help={field.help_info || ''}
            required={field.required}
          >
            <FieldComponent
              field={field}
              value={response[field.key]}
              onChange={value => setKey(field.key, value)}
            />
          </Form.Item>
        ))}

        {form.template.agree_to ? (
          <Form.Item>
            <Checkbox required>{form.template.agree_to}</Checkbox>
          </Form.Item>
        ) : (
          ''
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {form.template.submit_text}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
