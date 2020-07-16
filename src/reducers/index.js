import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import TokenReducer from './TokenReducer';
import QuestionsReducer from './QuestionsReducer';

const rootReducer = () => combineReducers({
  LoginReducer,
  TokenReducer,
  QuestionsReducer,
});

export default rootReducer;
