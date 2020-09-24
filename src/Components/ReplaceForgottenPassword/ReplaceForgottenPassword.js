import React, { useEffect } from 'react';
import ReplacePasswordForm from '../../Forms/ReplacePasswordForm';
import SuccessMessage from '../SuccessMessage';
import { NotFound } from '../../Screens/NotFound/NotFound';

type PasswordObj = {|
  password: string,
  passwordConfirmation: string
|};

type Props = {
  sendNewPasswordToBackend: PasswordObj => Promise<{}>,
  verifyKey: () => Promise<{}>,
  keyIsValid: boolean,
  errors?: {
    password?: string[],
    passwordConfirmation?: string[]
  },
  success?: boolean
};

const ReplaceForgottenPassword = ({
  sendNewPasswordToBackend,
  verifyKey,
  keyIsValid,
  success
}: Props) => {
  useEffect(() => {
    verifyKey();
  }, [verifyKey]);

  const sendQueryToBackend = (values: PasswordObj) => {
    const { password, passwordConfirmation } = values;
    return sendNewPasswordToBackend({
      password,
      passwordConfirmation
    });
  };

  if (!keyIsValid) {
    return <NotFound />;
  }
  if (success) {
    return (
      <SuccessMessage
        message="Successfully replaced password"
        linkText="Click here to login"
        linkUrl="/login"
      />
    );
  }

  return (
    <div className="replace-forgotten-password">
      <h1>Replace password</h1>
      <ReplacePasswordForm onSubmit={sendQueryToBackend} />
    </div>
  );
};

ReplaceForgottenPassword.defaultProps = {
  errors: {},
  success: false
};

export default ReplaceForgottenPassword;
