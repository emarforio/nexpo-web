import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

type Props = {
  logout: () => Promise<void>
};
const Logout = ({ logout }: Props) => {
  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/" />;
};

export default Logout;
