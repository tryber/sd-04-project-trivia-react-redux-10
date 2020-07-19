import { REQUEST_QUESTIONS, QUESTIONS_SUCCESS, QUESTIONS_REJECTED } from '../actions/index';

const INITIAL_STATE = {
  isFetching: false,
  questions: [],
  error: '',
};

function shuffle(received) {
  // Resposavel por embaralhar o array de respostas
  const array = [...received];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function sortOrder(questions) {
  return questions.map((item) => {
    const { incorrect_answers: incorrectAnswers, correct_answer: correctAnswer } = item;
    let alternatives = [...incorrectAnswers, correctAnswer];
    alternatives = shuffle(alternatives);
    return { ...item, alternatives };
  });
}

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
        questions: sortOrder(action.questions),
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
