import { setTaskStatus, TASK_ACTIONS } from './taskActions';
import { TASK_STATUS } from '../components/Task';

describe('taskActions', () => {
  it('returns the corret action', () => {
    const id = 1001;
    const status = TASK_STATUS.BLOCKED;
    const action = setTaskStatus(id, status);

    expect(action).toEqual({
      type: TASK_ACTIONS.SET_TASK_STATUS,
      payload: { id, status },
    });
  });
});
