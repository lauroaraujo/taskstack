import { TASK_ACTIONS } from '../actions/taskActions';

export const DEFAULT_STATE = {
  tasks: [
    { id: 1, status: 'PENDING', content: 'Do the dishes' },
    { id: 2, status: 'BLOCKED', content: 'Use task app' },
    { id: 3, status: 'DONE', content: 'Start task app' },
    { id: 4, status: 'DROPPED', content: 'Games Backlog App' },
  ],
}

const { SET_TASK_STATUS } = TASK_ACTIONS;

export default function tasksReducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
      case SET_TASK_STATUS:
        const tasks = state.tasks.map((t) => {
          const { id, status } = action.payload;
          return (t.id === id) ? {...t, status} : t;
        });
        return { ...state, tasks }
      default:
        return state;
    }
}