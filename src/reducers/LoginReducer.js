import { SAVE_USER_DATA, CLEAR_LOGIN_INFO, ADD_SCORE } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  avatar: '',
  score: 0,
  assertions: 0,
  gravatarEmail: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        name: action.name,
        avatar: action.avatar,
        gravatarEmail: action.email,
      };
    case CLEAR_LOGIN_INFO:
      return state;
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.score,
        assertions: state.assertions + 1,
      };
    default:
      return state;
  }
};

export default loginReducer;
