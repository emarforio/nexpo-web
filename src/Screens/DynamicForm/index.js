import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'antd';

import Spinner from '../../Components/LoadingSpinner';
import Error from '../../Components/ErrorMessage';

import fetchForm from './mock.js';

export default function () {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [form, setForm] = useState(null);

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

  function handleSubmit() {}

  return (
    <div>
      <h2>{form.template.title}</h2>
      <Form onSubmit={() => handleSubmit()}></Form>
    </div>
  );
}
