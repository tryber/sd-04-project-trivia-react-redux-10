import GET_QUESTIONS from '../services/GET_QUESTIONS';
import GET_TOKEN from '../services/GET_TOKEN';
import GET_GRAVATAR from '../services/GET_GRAVATAR';

export const REQUEST_TOKEN_API = 'REQUEST_TOKEN_API';
export const RECEIVED_TOKEN_API = 'RECEIVED_TOKEN_API';
export const REJECTED_TOKEN_API = 'REJECTED_TOKEN_API';
export const QUESTIONS_SUCCESS = 'QUESTIONS_SUCCESS';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const QUESTIONS_REJECTED = 'QUESTIONS_REJECTED';
export const RECEIVED_GRAVATAR = 'RECEIVED_GRAVATAR';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CLEAR_LOGIN_INFO = 'CLEAR_LOGIN_INFO';
export const TIC_TAC = 'TIC_TAC';
export const FREEZE_COUNTER = 'FREEZE_COUNTER';
export const RESTORE_CLOCK = 'RESTORE_CLOCK';
export const ADD_SCORE = 'ADD_SCORE';

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

export function fetchQuestions(token) {
  return (dispatch) => {
    // Thunk
    dispatch(requestQuestions());
    return GET_QUESTIONS(token).then(
      (data) => dispatch(questionsSuccess(data)),
      (error) => dispatch(questionsError(error)),
    );
  };
}

export const gravatarImage = (picture) => ({
  type: RECEIVED_GRAVATAR,
  picture: GET_GRAVATAR(picture),
});

export const clearLoginInfo = () => ({
  type: CLEAR_LOGIN_INFO,
});

export const getUserData = (name, avatar, email) => ({
  type: SAVE_USER_DATA,
  name,
  avatar,
  email,
});

export const ticTac = () => ({
  type: TIC_TAC,
});

export const restoreClock = () => ({
  type: RESTORE_CLOCK,
});

export const freezeClock = () => ({
  type: FREEZE_COUNTER,
});

export const addScore = (score) => ({
  type: ADD_SCORE,
  score,
});
