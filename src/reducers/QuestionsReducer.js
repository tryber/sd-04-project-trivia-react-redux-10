import { REQUEST_QUESTIONS, QUESTIONS_SUCCESS, QUESTIONS_REJECTED } from '../actions/index';

const INITIAL_STATE = {
  isFetching: false,
  questions: [],
  error: '',
};

const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return {
        ...state,
        isFetching: true,
      };

    case QUESTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        questions: action.questions,
      };
    case QUESTIONS_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default questionsReducer;
