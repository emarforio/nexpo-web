import React, { useEffect } from 'react';

import RoleForm from '../../../../Forms/RoleForm';
import '../Role.css';

/**
 * Responsible for rendering a role. Role id is recieved via url
 */
type RoleObj = {
  type: string,
  permissions: Array<string>,
  user?: number
};
type Props = {
  createRole: ({ role: RoleObj }) => Promise<void>,
  getAllUsers: () => Promise<void>
};

const RoleNew = ({ createRole, getAllUsers }: Props) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const createSafeRole = (values: RoleObj) => {
    createRole({ role: values });
  };

  return (
    <div className="role-new-view">
      <RoleForm onSubmit={createSafeRole} />
    </div>
  );
};

export default RoleNew;
