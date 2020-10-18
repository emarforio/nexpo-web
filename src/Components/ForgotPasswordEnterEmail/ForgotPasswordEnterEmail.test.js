import React from 'react';
import { shallow } from 'enzyme';
import ForgotPasswordEnterEmail from './ForgotPasswordEnterEmail';
import ForgotPasswordForm from '../../Forms/ForgotPasswordForm';
import SuccessMessage from '../SuccessMessage';

it('can render without crashing', () => {
  const props = {
    callBackend: jest.fn()
  };
  shallow(<ForgotPasswordEnterEmail {...props} />);
});

it('renders SuccessMessage on success', () => {
  const props = {
    callBackend: jest.fn(),
    success: true
  };
  const wrapper = shallow(<ForgotPasswordEnterEmail {...props} />);
  expect(wrapper.find(SuccessMessage)).toHaveLength(1);
});

it('renders a ForgotPasswordForm', () => {
  const props = {
    callBackend: jest.fn()
  };
  const wrapper = shallow(<ForgotPasswordEnterEmail {...props} />);
  expect(wrapper.find(ForgotPasswordForm)).toHaveLength(1);
});

it('calls callBackend on ForgotPasswordForm onSubmit', () => {
  const props = {
    callBackend: jest.fn()
  };
  const wrapper = shallow(<ForgotPasswordEnterEmail {...props} />);
  const email1 = 'admin@test';
  const email2 = 'student@test';
  setTimeout(() => {
    expect(props.callBackend).toHaveBeenCalledTimes(0);
  }, 100);
  wrapper
    .find(ForgotPasswordForm)
    .props()
    .onSubmit({ email: email1 });

  setTimeout(() => {
    expect(props.callBackend).toHaveBeenCalledTimes(1);
    expect(props.callBackend).lastCalledWith({ email: email1 });
  }, 100);
  wrapper
    .find(ForgotPasswordForm)
    .props()
    .onSubmit({ email: email2 });
  
  setTimeout(() => {
    expect(props.callBackend).toHaveBeenCalledTimes(2);
    expect(props.callBackend).lastCalledWith({ email: email2 });
  }, 100);
});
