import reducer, { DEFAULT_STATE } from './taskListReducer';
import { TASK_ACTIONS } from '../actions/taskActions';
import { TASK_STATUS } from '../components/Task';

describe('taskListReducer', () => {
  it(`handles ${TASK_ACTIONS.SET_TASK_STATUS} actions correclty`, () => {
    const action = {
      type: TASK_ACTIONS.SET_TASK_STATUS,
      payload: {
        id: 1,
        status: TASK_STATUS.DONE
      }
    };

    let state = {...DEFAULT_STATE};
    let newState = reducer(state, action);
    expect(newState).toEqual(getUpdatedStatus(1, TASK_STATUS.DONE, state));

    state = newState;
    newState = reducer(state, {...action, payload: {id: 2, status: TASK_STATUS.PENDING}});
    expect(newState).toEqual(getUpdatedStatus(2, TASK_STATUS.PENDING, state));
  });

  it('handles unknown actions correctly', () => {
    const action = {
      type: 'UNKNOWN_UT_ACTION',
    };

    let newState = reducer(DEFAULT_STATE, action);
    expect(newState).toBe(DEFAULT_STATE);

    newState = reducer(undefined, action);
    expect(newState).toEqual(DEFAULT_STATE);
  });
});

function getUpdatedStatus(id, newStatus, state) {
  return {
    tasks: state.tasks.map((t) => {
      if (t.id === id) { return {...t, status: newStatus}; }
      else { return t }
    })
  }
}