import GET_QUESTIONS from '../services/GET_QUESTIONS';
import GET_TOKEN from '../services/GET_TOKEN';

export const REQUEST_TOKEN_API = 'REQUEST_TOKEN_API';
export const RECEIVED_TOKEN_API = 'RECEIVED_TOKEN_API';
export const REJECTED_TOKEN_API = 'REJECTED_TOKEN_API';
export const QUESTIONS_SUCCESS = 'QUESTIONS_SUCCESS';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const QUESTIONS_REJECTED = 'QUESTIONS_REJECTED';
export const RECEIVED_GRAVATAR = 'RECEIVED_GRAVATAR';

const requestToken = () => ({
  type: REQUEST_TOKEN_API,
});

const tokenSuccess = (data) => ({
  type: RECEIVED_TOKEN_API,
  token: data.token,
});

const tokenError = (error) => ({
  type: REJECTED_TOKEN_API,
  error,
});

export function fetchToken() {
  return (dispatch) => {
    // Thunk
    dispatch(requestToken());
    return GET_TOKEN().then(
      (data) => dispatch(tokenSuccess(data)),
      (error) => dispatch(tokenError(error)),
    );
  };
}

const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
});

const questionsSuccess = (data) => ({
  type: QUESTIONS_SUCCESS,
  questions: data.results,
});

const questionsError = (error) => ({
  type: QUESTIONS_REJECTED,
  error,
});

export function fetchQuestions() {
  return (dispatch) => {
    // Thunk
    dispatch(requestQuestions());
    return GET_QUESTIONS().then(
      (data) => dispatch(questionsSuccess(data)),
      (error) => dispatch(questionsError(error)),
    );
  };
}

export const gravatarImage = (picture) => ({
  type: RECEIVED_GRAVATAR,
  picture,
});
