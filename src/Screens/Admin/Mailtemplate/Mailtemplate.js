import React, { useEffect } from 'react';
import { isEmpty } from 'lodash/fp';

import MailtemplateForm from '../../../Forms/MailtemplateForm';
import NotFound from '../../NotFound';
import LoadingSpinner from '../../../Components/LoadingSpinner';

type MailTemplateObj = {
  id?: string,
  name: string,
  subject: string,
  content: string,
  signature: string
};

type Props = {
  id?: string,
  mailtemplate: { mailtemplate: MailTemplateObj } | {},
  createMailtemplate: ({ mailtemplate: MailTemplateObj }) => Promise<void>,
  fetching: boolean,
  getMailtemplate: string => Promise<void>,
  updateMailtemplate: (
    string,
    { mailtemplate: MailTemplateObj }
  ) => Promise<void>
};

const Mailtemplate = ({
  id,
  mailtemplate,
  createMailtemplate,
  fetching,
  getMailtemplate,
  updateMailtemplate
}: Props) => {
  useEffect(() => {
    if (id) getMailtemplate(id);
  }, [getMailtemplate, id]);

  const handleMailtemplate = (values: MailTemplateObj) => {
    if (isEmpty(mailtemplate)) {
      createMailtemplate({ mailtemplate: { id, ...values } });
    } else if (id) {
      updateMailtemplate(id, { mailtemplate: { id, ...values } });
    }
  };

  if (fetching) return <LoadingSpinner />;
  if (id && isEmpty(mailtemplate)) return <NotFound />;

  return (
    <div className="mailtemplate">
      <h1>Mailtemplate</h1>
      <MailtemplateForm
        onSubmit={handleMailtemplate}
        initialValues={mailtemplate}
      />
    </div>
  );
};

Mailtemplate.defaultProps = {
  id: ''
};

export default Mailtemplate;
