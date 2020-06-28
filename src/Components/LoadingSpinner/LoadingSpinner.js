import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
const LoadingSpinner = () => (
  <div>
    <Spin tip="Loading..." indicator={antIcon} size="large" />
  </div>
);

export default LoadingSpinner;
