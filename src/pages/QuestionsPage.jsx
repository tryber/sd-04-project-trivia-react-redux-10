import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../actions/index';
import MainHeader from '../components/MainHeader';

// import Header from './Header.jsx'
// category: "Entertainment: Television"
// correct_answer: "Todd Chavez"
// difficulty: "easy"
// incorrect_answers: (3) ["Lennie Turtletaub", "Princess Carolyn", "Tom Jumbo-Grumbo"]
// question: "Which of these Bojack Horseman characters is a human?"
// type: "multiple"
function shuffle(received) {
  // Resposavel por embaralhar o array de respostas
  const array = [...received];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderCorrectAnswer(alternative) {
  // Resposavel por renderizar a alternativa correta
  return (
    <input
      type="button"
      key={alternative}
      className="correct"
      data-testid="correct-answer"
      value={alternative}
    />
  );
}

function renderWrongAnswer(alternative, incorrectAnswers) {
  // Responsavel por renderizar a alternativa errada
  return (
    <input
      type="button"
      key={alternative}
      className="wrong"
      data-testid={`wrong-answer-${incorrectAnswers.indexOf(alternative)}`}
      value={alternative}
    />
  );
}

function renderButtonNext() {
  return (
    <input
      type="button"
      data-testid="btn-next"
      className="next"
      style={{ display: 'none' }}
      // onClick={() => displayNextQuestion()}
      value="Próximo"
    />
  );
}

function renderQuestions(currentQuestion) {
  // Resposavel por renderizar as pergunta recebida.
  const {
    incorrect_answers: incorrectAnswers,
    correct_answer: correctAnswer,
    category,
    question,
  } = currentQuestion;
  let questions = [...incorrectAnswers, correctAnswer];
  questions = shuffle(questions);
  return (
    <div>
      <h5 data-testid="question-category">{category}</h5>
      <h4 data-testid="question-text">{question}</h4>
      <div>
        {questions.map((alternative) => {
          if (alternative === correctAnswer) {
            return renderCorrectAnswer(alternative);
          }
          return renderWrongAnswer(alternative, incorrectAnswers);
        })}
      </div>
      {renderButtonNext()}
    </div>
  );
}

class QuestionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    const { getQuestion, userToken } = this.props;
    return getQuestion(userToken);
  }

  render() {
    // const { TypeOfQuestion, QuestionText, Timer, Answer } = this.props;
    // const { questions } = this.state;
    const { isFetching, questions } = this.props;
    const { counter } = this.state;
    if (isFetching || questions.length === 0) return <p>Loading...</p>;
    return (
      <div>
        <MainHeader />
        {renderQuestions(questions[counter])}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestion: (token) => dispatch(fetchQuestions(token)),
});

const mapStateToProps = (state) => ({
  userToken: state.tokenReducer.token,
  isFetching: state.questionsReducer.isFetching,
  questions: state.questionsReducer.questions,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);

QuestionsPage.propTypes = {
  getQuestion: PropTypes.func.isRequired,
  userToken: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
