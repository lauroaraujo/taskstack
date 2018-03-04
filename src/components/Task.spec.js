import React from 'react';
import { shallow } from 'enzyme';
import { Task, TASK_STATUS } from './Task';

describe('Task', () => {
  it('renders pending task', () => {
    const task = shallow(<Task id={1} status={TASK_STATUS.PENDING} content='I should do this soon.' />);
    expect(task).toMatchSnapshot();
  });

  it('renders blocked task', () => {
    const task = shallow(<Task id={2} status={TASK_STATUS.BLOCKED} content={'I will do this after that.'} />);
    expect(task).toMatchSnapshot();
  });

  it('renders done task', () => {
    const task = shallow(<Task id={3} status={TASK_STATUS.DONE} content='I did this a while back.' />);
    expect(task).toMatchSnapshot();
  });

  it('renders dropped task', () => {
    const task = shallow(<Task id={4} status={TASK_STATUS.DROPPED} content={'I don\'t need to do this anymore.'} />);
    expect(task).toMatchSnapshot();
  });

  it('toggles status on input change', () => {
    const setStatus = jest.fn();
    const id = 11;
    const task = shallow(<Task
      id={id}
      status={TASK_STATUS.PENDING}
      setStatus={setStatus}
    />);

    const taskInput = task.find('input');
    const event = {
      stopPropagation: jest.fn(),
    }

    taskInput.simulate('change', event);
    expect(setStatus).toHaveBeenLastCalledWith(id, TASK_STATUS.BLOCKED);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);

    task.setProps({status: TASK_STATUS.BLOCKED});
    taskInput.simulate('change', event);
    expect(setStatus).toHaveBeenLastCalledWith(id, TASK_STATUS.DONE);
    expect(event.stopPropagation).toHaveBeenCalledTimes(2);

    task.setProps({status: TASK_STATUS.DONE});
    taskInput.simulate('change', event);
    expect(setStatus).toHaveBeenLastCalledWith(id, TASK_STATUS.DROPPED);
    expect(event.stopPropagation).toHaveBeenCalledTimes(3);

    task.setProps({status: TASK_STATUS.DROPPED});
    taskInput.simulate('change', event);
    expect(setStatus).toHaveBeenLastCalledWith(id, TASK_STATUS.PENDING);
    expect(event.stopPropagation).toHaveBeenCalledTimes(4);

    task.setProps({status: undefined});
    taskInput.simulate('change', event);
    expect(setStatus).toHaveBeenLastCalledWith(id, undefined);
    expect(event.stopPropagation).toHaveBeenCalledTimes(5);
  });
});
