import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import SessionApplications from './SessionApplications';

describe('SessionApplications', () => {
  let props;
  beforeEach(() => {
    props = {
      applications: [
        {
          id: '1',
          company: {
            name: 'Google',
            logoUrl: 'www.google.com/profile.jpg'
          },
          studentId: '1',
          motivation: 'Really motivating'
        },
        {
          id: '2',
          company: {
            name: 'Victor AB',
            logoUrl: 'www.victorab.com/profile.jpg'
          },
          studentId: '1',
          motivation: 'Really motivating'
        }
      ],
      companies: {},
      fetching: false,
      getAllCompanies: jest.fn(),
      deleteStudentSessionAppl: jest.fn(),
      updateStudentSessionAppl: jest.fn()
    };
  });

  it('renders without crashing', () => {
    shallow(<SessionApplications {...props} />);
  });

  it('renders loadingspinner when fetching', () => {
    const wrapper = shallow(<SessionApplications {...props} fetching />);
    expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  });

  it('calls updateStudentSessionApplwith correct parameters', () => {
    const wrapper = shallow(<SessionApplications {...props} />);
    const data = { motivation: 'Lul' };
    const instance = wrapper.instance();
    if(instance) instance.updateStudentSessionAppl('1', data);
    setTimeout(() => {
      expect(props.updateStudentSessionAppl).toHaveBeenCalledWith('1', {
        studentSessionApplication: { ...data }
      });
    }, 100);
  });

  it('can render listitems', () => {
    const wrapper = shallow(<SessionApplications {...props} />);
    // Check to see that list items renders properly
    const instance = wrapper.instance();
    if(instance) instance.toggleEditMode('1');
    wrapper.find('List').dive();
  });
});
