import React from 'react';
import Task, {TASK_STATUS} from './Task';

const TaskList = () => (
    <ul>
        <li><Task status={TASK_STATUS.PENDING} content='Do the dishes' /></li>
        <li><Task status={TASK_STATUS.BLOCKED} content='Use task app.' /></li>
        <li><Task status={TASK_STATUS.DONE} content='Start task app.' /></li>
        <li><Task status={TASK_STATUS.DROPPED} content='Games Backlog App.' /></li>
  </ul>
);

export default TaskList;