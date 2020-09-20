import React, { useEffect } from 'react';
import { Table, Button, Popconfirm, Divider } from 'antd';
import { sortBy } from 'lodash/fp';

import InvisibleLink from '../../../Components/InvisibleLink';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import HtmlTitle from '../../../Components/HtmlTitle';

/**
 * Responsible for rendering a list of mailtemplates
 */
type Props = {
  mailtemplates?: {},
  fetching: boolean,
  getAllMailtemplates: () => Promise<void>,
  deleteMailtemplate: string => Promise<void>
};

const Mailtemplates = ({
  mailtemplates,
  fetching,
  getAllMailtemplates,
  deleteMailtemplate
}: Props) => {

  useEffect(() => {
    getAllMailtemplates();
  }, []);

  const mailtemplateColumns = () => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, { id }: { id: string }) => (
        <InvisibleLink to={`/admin/mailtemplates/${id}`}>{name}</InvisibleLink>
      )
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject'
    },
    {
      title: 'Signature',
      dataIndex: 'signature',
      key: 'signature'
    },
    {
      title: 'Action',
      key: 'action',
      render: (mailtemplate: { id: string }) => {
        return (
          <span>
            <InvisibleLink to={`/admin/mailtemplates/${mailtemplate.id}`}>
              Edit
            </InvisibleLink>
            <Divider type="vertical" />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteMailtemplate(mailtemplate.id)}
            >
              <span style={{ color: '#ff4d4f', cursor: 'pointer' }}>
                Delete
              </span>
            </Popconfirm>
          </span>
        );
      }
    }
  ];

  const renderMailtemplates = () => {
    const tempMailTemplates = mailtemplates || {};
    return (
      <div>
        <HtmlTitle title="Mailtemplates" />

        <h1>Mailtemplates</h1>

        <Table
          columns={mailtemplateColumns()}
          dataSource={sortBy(
            'name',
            Object.keys(tempMailTemplates).map(i => ({
              ...tempMailTemplates[i],
              key: i
            }))
          )}
        />
        <InvisibleLink to="/admin/mailtemplates/new">
          <Button onClick={() => null} type="primary">
            New mailtemplate
          </Button>
        </InvisibleLink>
      </div>
    );
  }


  if (fetching) {
    return <LoadingSpinner />;
  }
  return renderMailtemplates();
}

Mailtemplates.defaultProps = {
  mailtemplates: {}
}

export default Mailtemplates;
