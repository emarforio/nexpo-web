import React, { useEffect } from 'react';
import { isEmpty, isNil, toInteger } from 'lodash/fp';
import { message } from 'antd';

import NotFound from '../../../NotFound';
import API from '../../../../API';
import CompanyForm from '../../../../Forms/CompanyForm';
import InviteForm from '../../../../Forms/InviteForm';
import HtmlTitle from '../../../../Components/HtmlTitle';
import LoadingSpinner from '../../../../Components/LoadingSpinner';
import '../Company.css';

/**
 * Responsible for editing a company. Company id is recieved via url
 */

type NewCompanyValues = {
  name?: string,
  website?: string,
  description?: string,
  logoUrl?: {
    uid: number,
    filename: string
  }
};

type Props = {
  id: string,
  company: { name?: string, website?: string, description?: string },
  fetching: boolean,
  getCompany: string => Promise<void>,
  history: { push: string => any },
  resetForm: string => any,
  updateCompany: (string, NewCompanyValues) => Promise<void>
};

const CompanyEdit = ({
  id,
  company,
  fetching,
  getCompany,
  history,
  resetForm,
  updateCompany
}: Props) => {
  useEffect(() => {
    getCompany(id);
  }, [getCompany, id]);

  const onSuccess = () => {
    history.push(`/admin/companies/${id}`);
  };

  const invite = (email: string) => {
    API.signup
      .initialRepresentativeSignup({ email, companyId: toInteger(id) })
      .then(res => {
        if (res.ok) {
          message.success(`Invitation sent to ${email}`);
          resetForm('invite');
        } else {
          message.warning('Invitation could not be sent');
        }
      });
  };

  if (fetching) return <LoadingSpinner />;
  if (isEmpty(company) || isNil(company)) return <NotFound />;

  return (
    <div className="company-edit-view">
      <HtmlTitle title={company.name} />
      <div>
        <h1>{company.name}</h1>
        <CompanyForm
          onSubmit={updateCompany}
          onSubmitSuccess={onSuccess}
          initialValues={company}
        />
        <br />
        <br />
        <h2>Invite Company Representatives</h2>
        <InviteForm onSubmit={invite} />
      </div>
    </div>
  );
};

export default CompanyEdit;
