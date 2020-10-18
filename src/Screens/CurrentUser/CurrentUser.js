import React, { useEffect } from 'react';
import { isEmpty } from 'lodash/fp';
import { Button, Modal, Avatar } from 'antd';
import LoadingSpinner from '../../Components/LoadingSpinner';
import NotFound from '../NotFound';
import CurrentUserForm from '../../Forms/CurrentUserForm';
import StudentForm from '../../Forms/StudentForm';

type UserObj = {
  email?: string,
  firstName?: string,
  lastName?: string,
  profileImage?: string,
  phoneNumber?: string
};
type StudentObj = {
  resumeSvUrl?: string,
  resumeEnUrl?: string,
  studentSessionApplications?: Array<{ companyId: number }>,
  studentSessions?: Array<{ companyId: number }>,
  programme?: { name: string },
  year?: string,
  interests?: [number],
  master?: string,
  linkedin?: string
};

type Props = {
  currentUser?: UserObj,
  currentStudent?: StudentObj,
  fetching: boolean,
  updateCurrentUser: ({ user: UserObj }) => Promise<void>,
  updateCurrentStudent: ({ student: StudentObj }) => Promise<void>,
  getAllProgrammes: () => Promise<void>,
  deleteCurrentUser: () => Promise<void>,
  logout: () => Promise<void>,
  resetForm: string => Promise<void>
};

const CurrentUser = ({
  currentUser,
  currentStudent,
  fetching,
  updateCurrentUser,
  updateCurrentStudent,
  getAllProgrammes,
  deleteCurrentUser,
  logout,
  resetForm
}: Props) => {
  useEffect(() => {
    getAllProgrammes();
  }, [getAllProgrammes]);

  const deleteAndLogoutCurrentUser = () => {
    deleteCurrentUser();
    logout();
  };

  const showConfirm = () => {
    Modal.confirm({
      title: 'Do you want to delete your account?',
      onOk: () => {
        deleteAndLogoutCurrentUser();
      },
      onCancel() {}
    });
  };

  const updateStudent = (values: StudentObj) => {
    return updateCurrentStudent({ student: values });
  };

  const resetStudentForm = () => {
    resetForm('student');
  };

  const updateUser = (values: UserObj) => {
    updateCurrentUser({ user: values });
  };

  if (fetching) {
    return <LoadingSpinner />;
  }
  if (isEmpty(currentUser)) {
    return <NotFound />;
  }

  const { email, firstName, lastName, profileImage } = currentUser || {};

  return (
    <div>
      <Button onClick={showConfirm} style={{ float: 'right' }} type="danger">
        Delete Account
      </Button>

      <Avatar
        src={profileImage}
        size={128}
        shape="circle"
        alt="User Profile Image"
      />
      <h1 style={{ fontSize: '48px' }}>
        {firstName} {lastName}
      </h1>

      <h2>User Information</h2>

      <h4>Email: {email}</h4>
      <CurrentUserForm onSubmit={updateUser} initialValues={currentUser} />

      {!isEmpty(currentStudent) && (
        <>
          <br />
          <h2>Student Information</h2>
          <StudentForm
            onSubmit={updateStudent}
            onSubmitSuccess={resetStudentForm}
            initialValues={currentStudent}
          />
        </>
      )}
    </div>
  );
};

CurrentUser.defaultProps = {
  currentUser: {},
  currentStudent: {}
};

export default CurrentUser;
