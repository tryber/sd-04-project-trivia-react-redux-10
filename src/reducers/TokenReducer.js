import { REQUEST_TOKEN_API, RECEIVED_TOKEN_API, REJECTED_TOKEN_API } from '../actions/index';

const INITIAL_STATE = {
  isFetching: false,
  token: '',
  error: '',
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_TOKEN_API:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVED_TOKEN_API:
      localStorage.setItem('token', JSON.stringify(action.token));
      return {
        ...state,
        isFetching: false,
        token: action.token,
      };
    case REJECTED_TOKEN_API:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default tokenReducer;
