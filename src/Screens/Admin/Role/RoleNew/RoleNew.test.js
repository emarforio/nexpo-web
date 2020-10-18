import React from 'react';
import { shallow } from 'enzyme';
import RoleNew from './RoleNew';

describe('RoleNew', () => {
  let props;
  beforeEach(() => {
    props = {
      createRole: jest.fn(),
      getAllUsers: jest.fn()
    };
  });

  it('should render without crashing', () => {
    shallow(<RoleNew {...props} />);
  });

  it('should create role', () => {
    const role = {
      type: 'test',
      permissions: ['read_all', 'write_all']
    };
    const func = jest.fn();
    const wrapper = shallow(<RoleNew {...props} createRole={func} />);

    const instance = wrapper.instance();
    if(instance) instance.createRole(role);

    setTimeout(() => {
      expect(func).toHaveBeenCalledWith({ role });
    }, 100);
  });
});
