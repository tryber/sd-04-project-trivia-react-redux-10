import { combineReducers } from 'redux';
import gravatarReducer from './GravatarReducer';
import tokenReducer from './TokenReducer';
import questionsReducer from './QuestionsReducer';
import loginReducer from './LoginReducer';
import counterTimeReducer from './CounterTimeReducer';

const rootReducer = combineReducers({
  gravatarReducer,
  loginReducer,
  tokenReducer,
  questionsReducer,
  counterTimeReducer,
});

export default rootReducer;
