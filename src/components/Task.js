import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

export const TASK_STATUS = {
  PENDING: 'PENDING',
  BLOCKED: 'BLOCKED',
  DONE: 'DONE',
  DROPPED: 'DROPPED',
};

export const TASK_STATUS_LIST = Object.keys(TASK_STATUS);

const Task = ({ content, status }) => (
  <div className={status}>
    {content}
  </div>
);

Task.propTypes = {
  content: PropTypes.string,
  status: PropTypes.oneOf(TASK_STATUS_LIST),
};

export default Task;
