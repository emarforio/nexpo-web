import React from 'react';
import CompanyForm from '../../../../Forms/CompanyForm';
import '../Company.css';

/**
 * Responsible for rendering a company. Company id is recieved via url
 */
type Company = {
  name: string,
  website?: string,
  description?: string,
  logoUrl?: {
    uid: number,
    filename: string
  }
};

type Props = {
  createCompany: ({ company: Company }) => Promise<void>
};

const CompanyNew = ({
  createCompany
}: Props) => {

  return (
    <div className="company-new-view">
      <CompanyForm onSubmit={createCompany} initialValues={{}} />
    </div>
  );
}

export default CompanyNew;
