import React from 'react';
import { shallow } from 'enzyme';
import { DEFAULT_STATE } from '../reducers/taskListReducer';
import { TaskList } from './TaskList';

describe('TaskList component', () => {
  it('renders correctly', () => {
    const list = shallow(<TaskList tasks={[...DEFAULT_STATE.tasks]}/>);
    expect(list).toMatchSnapshot();
  });
});
