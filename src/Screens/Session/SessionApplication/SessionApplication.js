import React, { useEffect } from 'react';
import { isEmpty } from 'lodash/fp';
import NotFound from '../../NotFound';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import HtmlTitle from '../../../Components/HtmlTitle';
import InvisibleLink from '../../../Components/InvisibleLink';
import SessionForm from '../../../Forms/SessionForm';
import '../Session.css';

type Application = {
  companyId: number,
  motivation: string
};
type Props = {
  fetching: boolean,
  currentUser: {
    email?: string,
    student?: {}
  },
  getAllCompanies: () => Promise<void>,
  getAllProgrammes: () => Promise<void>,
  createStudentSessionAppl: ({
    studentSessionApplication: Application
  }) => Promise<void>,
  resetForm: string => Promise<void>
};

const SessionApplication = ({
  fetching,
  currentUser,
  getAllCompanies,
  getAllProgrammes,
  createStudentSessionAppl,
  resetForm
}: Props) => {
  useEffect(() => {
    getAllCompanies();
    getAllProgrammes();
  }, [getAllCompanies, getAllProgrammes]);

  const resetStudentForm = () => {
    resetForm('student');
  };

  const createStudentSessionApplication = (data: Application) => {
    createStudentSessionAppl({
      studentSessionApplication: data
    });
    resetStudentForm();
  };

  if (fetching) {
    return <LoadingSpinner />;
  }
  if (isEmpty(currentUser)) {
    return <NotFound />;
  }

  const enabled = process.env.REACT_APP_STUDENT_SESSION_ENABLED === 'true';

  return (
    <div className="session-application">
      <HtmlTitle title="Student Session Application" />
      <h1>Apply for student sessions</h1>
      <h2>
        But first! Make sure your Student Information is uploaded and updated!
      </h2>
      <h4>
        You only need to upload your CV(s) once. All the companies you apply for
        will receive the same CV(s) but different motivations.
        <br />
        You can update your information
        <InvisibleLink to="/user"> here</InvisibleLink>
      </h4>
      <br />

      {enabled ? (
        <SessionForm onSubmit={createStudentSessionApplication} />
      ) : (
        <p>Student sessions are currently not available.</p>
      )}
    </div>
  );
};

export default SessionApplication;
