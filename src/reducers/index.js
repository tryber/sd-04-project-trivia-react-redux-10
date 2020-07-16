import { combineReducers } from 'redux';
import gravatarReducer from './GravatarReducer';
import tokenReducer from './TokenReducer';
import questionsReducer from './QuestionsReducer';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
  gravatarReducer,
  loginReducer,
  tokenReducer,
  questionsReducer,
});

export default rootReducer;
