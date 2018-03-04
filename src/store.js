import { combineReducers, createStore } from 'redux';
import taskListReducer from './reducers/taskListReducer';

const root = combineReducers({
  taskList: taskListReducer,
});

export default createStore(root);
