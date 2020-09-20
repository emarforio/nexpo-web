import React, { useEffect } from 'react';
import { Table, Button, Divider, Popconfirm } from 'antd';

import InvisibleLink from '../../../Components/InvisibleLink';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import HtmlTitle from '../../../Components/HtmlTitle';

/**
 * Responsible for rendering a list of programmes
 */
type Props = {
  programmes?: {},
  fetching: boolean,
  deleteProgramme: string => Promise<void>,
  getAllProgrammes: () => Promise<void>
};

const Programmes = ({
  programmes,
  fetching,
  deleteProgramme,
  getAllProgrammes
}: Props) => {

  useEffect(() => {
    getAllProgrammes();
  }, []);

  const programmeColumns = () => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, { id }: { id: string }) => (
        <InvisibleLink to={`/admin/programmes/${id}`}>{name}</InvisibleLink>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (programme: { id: string }) => {
        return (
          <span>
            <InvisibleLink to={`/admin/programmes/${programme.id}`}>
              Edit
            </InvisibleLink>
            <Divider type="vertical" />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteProgramme(programme.id)}
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

  const renderProgrammes = () => {
    const tempProgrammes = programmes || {};
    return (
      <div>
        <HtmlTitle title="Programmes" />

        <h1>Programmes</h1>

        <Table
          columns={programmeColumns()}
          dataSource={Object.keys(tempProgrammes).map(i => ({
            ...tempProgrammes[i],
            key: i
          }))}
        />

        <InvisibleLink to="/admin/programmes/new">
          <Button onClick={() => null} type="primary">
            New programme
          </Button>
        </InvisibleLink>
      </div>
    );
  }

  if (fetching) {
    return <LoadingSpinner />;
  }
  return renderProgrammes();
}

Programmes.defaultProps = {
  programmes: {}
}

export default Programmes;
