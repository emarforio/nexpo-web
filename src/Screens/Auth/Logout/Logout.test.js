import React from 'react';
import { shallow } from 'enzyme';
import Logout from './Logout';

it('calls logout prop on mount', () => {
  const func = jest.fn();
  shallow(<Logout logout={func} />);

  setTimeout(() => {
    expect(func).toHaveBeenCalledTimes(1);
  }, 100);
});
