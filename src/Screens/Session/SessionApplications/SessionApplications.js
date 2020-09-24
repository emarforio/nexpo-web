import React, { useState, useEffect } from 'react';
import { sortBy } from 'lodash/fp';
import { List, Avatar, Popconfirm, Button } from 'antd';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import HtmlTitle from '../../../Components/HtmlTitle';
import UpdateSessionApplicationForm from '../../../Forms/UpdateSessionApplicationForm';
import '../Session.css';

type Company = {
  name: string,
  logoUrl: string
};

type Application = {
  id: string,
  company: Company,
  motivation: string
};

type Props = {
  applications?: ?Array<Application>,
  companies?: {},
  getAllCompanies: () => Promise<void>,
  deleteStudentSessionAppl: string => Promise<void>,
  fetching: boolean,
  updateStudentSessionAppl: (
    string,
    { studentSessionApplication: { motivation: string } }
  ) => Promise<void>
};

const DefaultState = {
  editing: {}
};

const SessionApplications = ({
  applications,
  companies,
  getAllCompanies,
  deleteStudentSessionAppl,
  fetching,
  updateStudentSessionAppl
}: Props) => {
  const [state, setState] = useState(DefaultState);

  useEffect(() => {
    getAllCompanies();
  }, [getAllCompanies]);

  const toggleEditMode = (id: string) => {
    const { editing: stateEditing } = state;
    const editing = {};
    editing[id] = !stateEditing[id];
    setState({ editing });
  };

  const updateStudentSessionApplication = (
    id: string,
    values: { motivation: string }
  ) => {
    updateStudentSessionAppl(id, { studentSessionApplication: values });
    setState({ editing: {} });
  };

  const renderMotivationField = (motivation: string, id: string) => {
    const { editing } = state;
    if (editing[id])
      return (
        <UpdateSessionApplicationForm
          initialValues={{ motivation }}
          id={id}
          onSubmit={values => updateStudentSessionApplication(id, values)}
        />
      );
    return `Motivation: ${motivation}`;
  };

  const renderApplication = (application: Application) => {
    const { editing } = state;
    return (
      <List.Item
        actions={[
          <Button
            type={editing[application.id] ? 'default' : 'primary'}
            onClick={() => toggleEditMode(application.id)}
          >
            {editing[application.id] ? 'Cancel' : 'Edit'}
          </Button>,
          <Popconfirm
            placement="topLeft"
            title="Are you sure you want to delete the application?"
            onConfirm={() => deleteStudentSessionAppl(application.id)}
          >
            <span style={{ color: '#ff4d4f', cursor: 'pointer' }}>Delete</span>
          </Popconfirm>
        ]}
      >
        <List.Item.Meta
          title={application.company.name}
          description={renderMotivationField(
            application.motivation,
            application.id
          )}
          avatar={
            <Avatar
              src={application.company.logoUrl}
              size={128}
              shape="square"
              alt="Company Logotype"
            />
          }
        />
      </List.Item>
    );
  };

  if (fetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="session-applications">
      <HtmlTitle title="Student Session Application" />
      <h1>Student Session Applications</h1>
      <List
        size="large"
        bordered
        dataSource={sortBy('company.name', applications || [])}
        renderItem={renderApplication}
        locale={{ emptyText: 'No Applications' }}
      />
    </div>
  );
};

SessionApplications.defaultProps = {
  companies: {},
  applications: []
};

export default SessionApplications;
