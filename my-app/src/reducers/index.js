import { combineReducers } from 'redux';
import tasks from './tasks';
import aims from './aims';

const reducers = combineReducers({
  tasks,
  aims,
});

export default reducers;
