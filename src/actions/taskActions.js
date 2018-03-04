export const TASK_ACTIONS = {
  SET_TASK_STATUS: 'SET_TASK_STATUS',
}

const { SET_TASK_STATUS } = TASK_ACTIONS;

export function setTaskStatus(id, status) {
  return {
    type: SET_TASK_STATUS,
    payload: { id, status }
  };
}
