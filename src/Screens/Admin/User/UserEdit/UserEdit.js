import React, { useEffect } from 'react';

import { isEmpty, isNil } from 'lodash/fp';
import HtmlTitle from '../../../../Components/HtmlTitle';
import LoadingSpinner from '../../../../Components/LoadingSpinner';

import NotFound from '../../../NotFound';
import UserForm from '../../../../Forms/UserForm';
import '../User.css';

/**
 * Responsible for rendering a user. User id is recieved via url
 */
type UserObj = {
  firstName?: string,
  lastName?: string,
  phoneNumber?: string
};
type Props = {
  id?: string,
  user: { name?: string },
  fetching: boolean,
  getUser: string => Promise<void>,
  history: { push: string => any },
  updateUser: (string, { user: UserObj }) => Promise<void>
};

const UserEdit = ({
  id,
  user,
  fetching,
  getUser,
  history,
  updateUser
}: Props) => {

  useEffect(() => {
    if (id) getUser(id);
  }, []);

  const handleUser = (values: UserObj) => {
    if (id) {
      updateUser(id, { user: values });
      history.push(`/admin/users/${id}`);
    }
  };

  if (fetching) return <LoadingSpinner />;
  if (isEmpty(user) || isNil(user)) return <NotFound />;

  return (
    <div className="user-edit-view">
      <HtmlTitle title={user.name} />
      <div>
        <h1>{user.name}</h1>
        <UserForm onSubmit={handleUser} initialValues={user} />
      </div>
    </div>
  );
}

UserEdit.defaultProps = {
  id: ''
}

export default UserEdit;
