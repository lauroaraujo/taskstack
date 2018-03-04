import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

export const TaskList = ({ tasks }) => (
  <ul>
    { tasks.map((t) => renderTask(t)) }
  </ul>
);

function renderTask(task) {
  const {id, status, content} = task;
  return (
    <li key={`t_${id}`}>
      <Task id={id} status={status} content={content} />
    </li>);
}

function mapStateToProps({ taskList }) {
  return {
    tasks: taskList.tasks,
  }
}

export default connect(mapStateToProps)(TaskList);
