import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

it('should render without crashing', () => {
  const props = {
    isLoggedIn: false,
    login: jest.fn(),
    location: { state: {}, hash: '', pathname: '', search: '' }
  };
  shallow(
    <MemoryRouter>
      <Login {...props} />
    </MemoryRouter>
  );
});

it('should call login with correct values', () => {
  const props = {
    isLoggedIn: false,
    login: jest.fn(),
    location: { state: {}, hash: '', pathname: '', search: '' }
  };
  const wrapper = shallow(<Login {...props} />);
  const email = 'admin@test';
  const password = 'plzDontHack123';
  expect(props.login).toHaveBeenCalledTimes(0);
  const instance = wrapper.instance();
  if(instance) instance.login({ email, password });
  setTimeout(() => {
    expect(props.login).toHaveBeenCalledTimes(1);
    expect(props.login).lastCalledWith({ email, password });
  }, 100);
});
