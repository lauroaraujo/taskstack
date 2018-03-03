import React from 'react';
import { shallow } from 'enzyme';
import Task, { TASK_STATUS } from './Task';

describe('Task', () => {
  it('renders pending task', () => {
    const task = shallow(<Task status={TASK_STATUS.PENDING} content='I should do this soon.' />);
    expect(task).toMatchSnapshot();
  });

  it('renders blocked task', () => {
    const task = shallow(<Task status={TASK_STATUS.BLOCKED} content={'I will do this after that.'} />);
    expect(task).toMatchSnapshot();
  });

  it('renders done task', () => {
    const task = shallow(<Task status={TASK_STATUS.DONE} content='I did this a while back.' />);
    expect(task).toMatchSnapshot();
  });

  it('renders dropped task', () => {
    const task = shallow(<Task statue={TASK_STATUS.DROPPED} content={'I don\'t need to do this anymore.'} />);
    expect(task).toMatchSnapshot();
  });
});
