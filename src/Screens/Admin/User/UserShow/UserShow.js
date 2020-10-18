import React, { useEffect } from 'react';
import { isEmpty, map } from 'lodash/fp';
import { Button } from 'antd';

import HtmlTitle from '../../../../Components/HtmlTitle';
import LoadingSpinner from '../../../../Components/LoadingSpinner';
import InvisibleLink from '../../../../Components/InvisibleLink';

import NotFound from '../../../NotFound';
import '../User.css';

/**
 * Responsible for rendering a user. User id is recieved via url
 */
type Props = {
  id?: string,
  user?: {
    id?: string,
    email?: string,
    firstName?: string,
    lastName?: string,
    foodPreferences?: string,
    phoneNumber?: string,
    roles?: Array<{ type: string }>,
    student?: {
      resumeSvUrl: string,
      resumeEnUrl: string,
      studentSessionApplications: Array<{ companyId: number }>,
      studentSessions: Array<{ companyId: number }>,
      programme: { name: string },
      year: string
    }
  },
  fetching: boolean,
  getUser: string => Promise<void>,
  match?: {
    path?: string
  }
};

const UserShow = ({ id, user, fetching, getUser, match }: Props) => {
  useEffect(() => {
    if (id) getUser(id);
  }, [getUser, id]);

  const { firstName, lastName, email, phoneNumber, foodPreferences, student } =
    user || {};

  const displayName = () => {
    return firstName ? [firstName, lastName].join(' ') : email;
  };

  const roles = () => {
    return isEmpty(roles) ? 'None' : map('type', roles).join(', ');
  };

  const renderStudent = () => {
    const {
      year,
      resumeSvUrl,
      resumeEnUrl,
      programme,
      studentSessionApplications = [],
      studentSessions = []
    } = student || {};

    return (
      <>
        <h2>Student Information</h2>
        <p>Year: {year || 'None'}</p>
        <p>Resume Sv: {resumeSvUrl ? 'Yes' : 'No'}</p>
        <p>Resume En: {resumeEnUrl ? 'Yes' : 'No'}</p>
        <p>Programme: {programme && programme.name}</p>
        <p>Student Session Applications: {studentSessionApplications.length}</p>
        <p>Student Sessions: {studentSessions.length}</p>
      </>
    );
  };

  if (fetching) return <LoadingSpinner />;
  if (isEmpty(user)) return <NotFound />;

  return (
    <div className="user-show-view">
      <HtmlTitle title={displayName()} />

      <h1 className="centering">{displayName()}</h1>
      <p>Email: {email}</p>
      <p>Phone number: {phoneNumber}</p>
      <p>Roles: {roles()}</p>
      <p>Food Preferences: {foodPreferences}</p>
      {student && renderStudent()}
      <InvisibleLink to={`/admin/users/${id || ''}/edit`}>
        <Button onClick={() => null} type="primary">
          Edit
        </Button>
      </InvisibleLink>
    </div>
  );
};

UserShow.defaultProps = {
  id: '',
  user: {
    student: {}
  },
  match: {
    path: ''
  }
};

export default UserShow;
