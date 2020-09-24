import React, { useState, useEffect } from 'react';
import { SubmissionError } from 'redux-form';
import { pick } from 'lodash/fp';
import ErrorMessage from '../../../../Components/ErrorMessage';
import SuccessMessage from '../../../../Components/SuccessMessage';
import API from '../../../../API';
import FinalizeSignupForm from '../../../../Forms/FinalizeSignupForm';

type Props = {
  signupKey: string
};

const DefaultState = {
  email: '',
  noSuchKey: false,
  finished: false
};

type SignUpValues = {
  password: string,
  passwordConfirmation: string,
  firstName: string,
  lastName: string,
  phoneNumber: string
};

/**
 * A component which allows users to complete a sign up process
 */
const FinalizeSignup = ({ signupKey }: Props) => {
  const [state, setState] = useState(DefaultState);

  const fetchCurrentSignup = () => {
    API.signup
      .getCurrentSignup(signupKey)
      .then(res => setState({ ...state, email: res.data.email }))
      .catch(() => setState({ ...state, noSuchKey: true }));
  };

  useEffect(() => {
    fetchCurrentSignup();
  });

  const signup = (values: SignUpValues) => {
    const params = pick(
      [
        'password',
        'passwordConfirmation',
        'firstName',
        'lastName',
        'phoneNumber'
      ],
      values
    );

    return API.signup
      .finalizeSignup(signupKey, params)
      .then(() => setState({ ...state, finished: true }))
      .catch(err => {
        // This error will be shown in the form
        throw new SubmissionError({ ...err.errors });
      });
  };

  // Redirect to root url if sign up key is incorrect
  if (state.noSuchKey) {
    return (
      <ErrorMessage
        message="This link seems to be broken!"
        linkUrl="/signup"
        linkText="Click here to sign up"
      />
    );
  }
  if (state.finished) {
    return (
      <SuccessMessage
        message="You have signed up!"
        linkUrl="/"
        linkText="Click here to go home"
      />
    );
  }
  return (
    <div className="finalize-signup">
      <h1>Sign Up</h1>
      <FinalizeSignupForm
        onSubmit={signup}
        initialValues={{ email: state.email }}
      />
    </div>
  );
};

export default FinalizeSignup;
