import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import makeField from './helper';

const TextInput = makeField(Input);
const TextArea = makeField(Input.TextArea);

type Props = {
  handleSubmit: () => Promise<void>
};

const MailtemplateForm = ({ handleSubmit }: Props) => (
  <Form onFinish={() => handleSubmit()}>
    <Field name="name" label="Name:" component={TextInput} />
    <Field
      name="subject"
      label="Subject:"
      component={TextInput}
      prefix={<MailOutlined />}
    />
    <Field name="content" label="Content:" component={TextArea} />
    <Field name="signature" label="Signature:" component={TextArea} />
    <Button htmlType="submit">Create template</Button>
  </Form>
);

const mapStateToProps = (state) => ({
  formState: state.form.MailtemplateForm
});

const stateful = connect(mapStateToProps);

export default stateful(reduxForm({ form: 'mailtemplate' })(MailtemplateForm));
