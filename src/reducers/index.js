import { combineReducers } from 'redux';
import ideas from './ideasReducer';

const rootReducer = combineReducers({
  ideas,
});

export default rootReducer;
