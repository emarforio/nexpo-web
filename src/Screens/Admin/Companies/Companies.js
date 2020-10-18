import React, { useEffect } from 'react';
import { Icon, Upload, Table, Button, Popconfirm, Divider } from 'antd';
import { size, sortBy, toLower } from 'lodash/fp';

import { toExternal } from '../../../Util/URLHelper';
import InvisibleLink from '../../../Components/InvisibleLink';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import HtmlTitle from '../../../Components/HtmlTitle';
import FilterSearch, { FilterIcon } from '../../../Components/FilterSearch';

/**
 * Responsible for rendering a list of companies
 */
type Props = {
  companies?: {},
  fetching: boolean,
  getAllCompanies: () => Promise<void>,
  deleteCompany: string => Promise<void>,
  createBulk: (data: {}) => Promise<void>
};

const Companies = ({
  companies,
  fetching,
  getAllCompanies,
  deleteCompany,
  createBulk
}: Props) => {
  useEffect(() => {
    getAllCompanies();
  }, [getAllCompanies]);

  const companyColumns = () => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filterDropdown: FilterSearch,
      filterIcon: FilterIcon,
      onFilter: (value: string, record: { name: string }) =>
        toLower(record.name).includes(toLower(value)),
      render: (name: string, { id }: { id: string }) => (
        <InvisibleLink to={`/admin/companies/${id}`}>{name}</InvisibleLink>
      )
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
      render: (website: string) => <a href={toExternal(website)}>{website}</a>
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (description: string) =>
        size(description) > 42 ? `${description.slice(0, 42)} ...` : description
    },
    {
      title: 'Action',
      key: 'action',
      render: (company: { id: string }) => (
        <span>
          <InvisibleLink to={`/admin/companies/${company.id}`}>
            Show
          </InvisibleLink>
          <Divider type="vertical" />
          <InvisibleLink to={`/admin/companies/${company.id}/edit`}>
            Edit
          </InvisibleLink>
          <Divider type="vertical" />
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              deleteCompany(company.id);
            }}
          >
            <span style={{ color: '#ff4d4f', cursor: 'pointer' }}>Delete</span>
          </Popconfirm>
        </span>
      )
    }
  ];

  const csvToObj = (text: string) => {
    const lines = text.split('\n');
    const result = { companies: [], representatives: [] };
    const headers = [
      'name',
      'website',
      'email',
      'hostMail',
      'hostName',
      'hostPhoneNumber'
    ];

    for (let i = 1; i < lines.length - 1; i += 1) {
      const company = {};
      const representative = {};
      const currentLine = lines[i].split(',');

      [0, 2].forEach(j => {
        representative[headers[j]] = currentLine[j];
      });
      [0, 1, 3, 4, 5].forEach(j => {
        company[headers[j]] = currentLine[j];
      });
      company.description = '.';

      result.companies.push(company);
      result.representatives.push(representative);
    }
    return result;
  };

  const renderCompanies = () => {
    const tempComanies = companies || {};
    return (
      <div>
        <HtmlTitle title="Companies" />

        <h1>Companies</h1>

        <Table
          columns={companyColumns()}
          dataSource={sortBy(
            'name',
            Object.keys(tempComanies).map(i => ({
              ...tempComanies[i],
              key: i
            }))
          )}
        />
        <div>
          <InvisibleLink to="companies/new">
            <Button onClick={() => null} type="primary">
              New company
            </Button>
          </InvisibleLink>
          <br />
          <br />
          <Upload
            key="uploadButton"
            accept=".csv"
            showUploadList={false}
            beforeUpload={file => {
              const reader = new FileReader();
              reader.onload = e => {
                const obj = csvToObj(e.target.result);
                createBulk(obj);
              };
              reader.readAsText(file);
              return false;
            }}
          >
            <Button>
              <Icon type="upload" />
              Create Multiple Companies
            </Button>
          </Upload>
          <p>
            This button expects an .csv file with the following headers:
            <br />
            name,description,website,email,hostName,hostMail,hostPhoneNumber
          </p>
        </div>
      </div>
    );
  };

  if (fetching) {
    return <LoadingSpinner />;
  }
  return renderCompanies();
};

Companies.defaultProps = {
  companies: {}
};

export default Companies;
