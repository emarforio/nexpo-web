import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Checkbox } from 'antd';

import Spinner from '../../Components/LoadingSpinner';
import Error from '../../Components/ErrorMessage';

import FieldComponent from './components';

export default function() {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(null);
  const [response, setResponse] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(`/api/forms/${id}`);
        if (!data.template) {
          throw Error('Failed to fetch form');
        }
        setForm(data);
      } catch (e) {
        setError('Failed to fetch form');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error !== null) {
    return <Error message={error} />;
  }

  if (finished) {
    return <h2>Your response has been submitted. Thank you.</h2>;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      form_id: id,
      data: Object.keys(response).map(key => ({
        key,
        value: response[key]
      }))
    };

    setLoading(true);
    try {
      const submitResponse = await fetch('/api/form_responses', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      });

      if (!submitResponse.status !== 201) {
        throw Error();
      }

      setFinished(true);
    } catch (e) {
      setError('Failed to submit form');
    } finally {
      setLoading(false);
    }
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
