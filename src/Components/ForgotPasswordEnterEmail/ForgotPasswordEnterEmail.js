import React from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../../Forms/ForgotPasswordForm';
import SuccessMessage from '../SuccessMessage';

type Props = {
  callBackend: ({ email: string }) => () => Promise<void>,
  success?: boolean
};

const ForgotPasswordEnterEmail = ({
  callBackend,
  success
}: Props) => {
  
  const queryBackend = (values: { email: string }) => {
    const { email } = values;
    callBackend({ email });
  };

  if (success) {
    return (
      <SuccessMessage
        message="An email has been sent to the address you specified!"
        linkText="Click here to go home"
        linkUrl="/"
      />
    );
  }
  return (
    <div className="forgot-password-enter-email">
      <h1>Forgot password</h1>

      <ForgotPasswordForm onSubmit={queryBackend} />

      <br />
      <br />

      <div className="existing-account">
        Already have an account?
        <br />
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}

ForgotPasswordEnterEmail.defaultProps = {
  success: false,
}

export default ForgotPasswordEnterEmail;
