import React, { useEffect } from 'react';
import { isEmpty, isNil, capitalize } from 'lodash/fp';

import NotFound from '../../../NotFound';
import RoleForm from '../../../../Forms/RoleForm';
import HtmlTitle from '../../../../Components/HtmlTitle';
import LoadingSpinner from '../../../../Components/LoadingSpinner';
import '../Role.css';

/**
 * Responsible for rendering a role. Role id is recieved via url
 */
type Role = {
  type: string,
  permissions: Array<string>,
  user: number
}

type Props = {
  id: string,
  role: { type?: string },
  getRole: string => Promise<void>,
  getAllUsers: () => Promise<void>,
  fetchingRoles: boolean,
  fetchingUsers: boolean,
  updateRole: (string, { role: Role }) => Promise<void>,
  history: { push: string => any }
};

const RoleEdit = ({
  id,
  role,
  getRole,
  getAllUsers,
  fetchingRoles,
  fetchingUsers,
  updateRole,
  history
}: Props) => {
  
  useEffect(() => {
    getRole(id);
    getAllUsers();
  }, []);

  const handleRole = (values: Role) => {
    updateRole(id, { role: values });
    history.push(`/admin/roles/${id}`);
  };

  if (fetchingRoles || fetchingUsers) return <LoadingSpinner />;
  if (isEmpty(role) || isNil(role)) return <NotFound />;

  return (
    <div className="role-edit-view">
      <HtmlTitle title={capitalize(role.type || '')} />
      <div>
        <h1>Role: {capitalize(role.type || '')}</h1>
        <RoleForm onSubmit={handleRole} initialValues={role} />
      </div>
    </div>
  );
}

export default RoleEdit;
