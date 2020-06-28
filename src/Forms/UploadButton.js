import React from 'react';
import { isEmpty } from 'lodash/fp';
import { message, Button, Upload } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

import makeField from './helper';

type Props = {
  accept: string,
  value: {} | string,
  onChange: (?File) => Promise<void>
};

const UploadButton = ({ accept = '', value, onChange }: Props) => (
  <Upload
    key="uploadButton"
    accept={accept}
    fileList={isEmpty(value) ? [] : [value]}
    beforeUpload={(file) => {
      if (file.size < 1e6) onChange(file);
      else message.warning('Cannot upload files larger than 1MB');
      return false;
    }}
    onRemove={() => onChange(null)}
  >
    <Button>
      <CloudUploadOutlined />
      Upload
    </Button>
  </Upload>
);

// UploadButton.defaultProps = {
//   accept: ''
// };

export default makeField(UploadButton);
