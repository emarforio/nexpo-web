import React, { useEffect } from 'react';
import { isEmpty, isNil } from 'lodash/fp';
import type { RouterHistory } from 'react-router-dom';
import NotFound from '../../../NotFound';
import CurrentCompanyForm from '../../../../Forms/CurrentCompanyForm';
import LoadingSpinner from '../../../../Components/LoadingSpinner';

type CurrentCompany = {
  id?: number,
  name?: string,
  studentSessionDays?: number
};

type CompanyForm = {
  website: string,
  description: string,
  logoUrl: File
};

type Props = {
  fetching: boolean,
  history: RouterHistory,
  currentCompany: CurrentCompany,
  getCurrentCompany: () => Promise<void>,
  updateCurrentCompany: ({ company: CompanyForm }) => Promise<void>
};

const YourCompanyProfileEdit = ({
  fetching,
  history,
  currentCompany,
  getCurrentCompany,
  updateCurrentCompany
}: Props) => {
  useEffect(() => {
    getCurrentCompany();
  }, [getCurrentCompany]);

  const updatingCurrentCompany = (values: CompanyForm) => {
    return updateCurrentCompany({ company: values });
  };

  const onSuccess = () => {
    history.push('/company/profile');
  };

  const showStudentSession = () => {
    switch (currentCompany.studentSessionDays) {
      case 0:
        return 'No days';
      case 1:
        return 'First day';
      case 2:
        return 'Second day';
      case 3:
        return 'Both days';
      default:
        return 'Invalid days';
    }
  };

  if (fetching) return <LoadingSpinner />;
  if (isEmpty(currentCompany) || isNil(currentCompany)) return <NotFound />;

  const { name } = currentCompany;

  return (
    <div>
      <h1>{name}</h1>
      <div style={{ marginBottom: 20 }}>
        Student Session Days: {showStudentSession()}
      </div>
      <CurrentCompanyForm
        onSubmit={updatingCurrentCompany}
        onSubmitSuccess={onSuccess}
        initialValues={currentCompany}
      />
    </div>
  );
};

export default YourCompanyProfileEdit;
