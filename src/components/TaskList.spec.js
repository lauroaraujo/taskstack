import React from 'react';
import { shallow } from 'enzyme';
import TaskList from './TaskList';

describe('TaskList component', () => {
  it('renders correctly', () => {
    const list = shallow(<TaskList />);
    expect(list).toMatchSnapshot();
  });
});