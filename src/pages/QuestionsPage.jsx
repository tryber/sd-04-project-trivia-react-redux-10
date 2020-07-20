import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  fetchQuestions,
  restoreClock,
  freezeClock,
  addScore,
} from '../actions/index';
import MainHeader from '../components/MainHeader';
import './QuestionsPage.css';
import Timer from '../components/Timer';
// import Header from './Header.jsx'
// category: "Entertainment: Television"
// correct_answer: "Todd Chavez"
// difficulty: "easy"
// incorrect_answers: (3) ["Lennie Turtletaub", "Princess Carolyn", "Tom Jumbo-Grumbo"]
// question: "Which of these Bojack Horseman characters is a human?"
// type: "multiple"

function dissableButtonNext() {
  // Desabilita o button next
  const buttonNext = document.querySelector('.next');
  buttonNext.style.display = 'none';
}

function renderButtonNext(goToNextQuestion, restoreTimer) {
  // Responsavel por renderizar o button Next
  return (
    <input
      type="button"
      data-testid="btn-next"
      className="next"
      style={{ display: 'none' }}
      onClick={() => {
        goToNextQuestion();
        dissableButtonNext();
        restoreTimer();
        // setCounter();
      }}
      value="Próximo"
    />
  );
}

function setColor() {
  // Resposavel por mudar as bordas das respostas
  const wrongs = Array.from(document.querySelectorAll('.wrong'));
  const correct = document.querySelector('.correct');
  wrongs.forEach((item) => {
    item.classList.add('wrong-style');
  });
  correct.classList.add('correct-style');
  const buttonNext = document.querySelector('.next');
  buttonNext.style.display = 'block';
}

function calculateScore(timer, difficulty, addPoints) {
  let level;
  if (difficulty === 'hard') level = 3;
  if (difficulty === 'medium') level = 2;
  if (difficulty === 'easy') level = 1;
  const score = 10 + (timer * level);
  addPoints(score);
}

function renderCorrectAnswer(alternative, timer, difficulty, addPoints) {
  // Resposavel por renderizar a alternativa correta
  return (
    <input
      type="button"
      key={alternative}
      className="correct"
      onClick={() => {
        setColor();
        calculateScore(timer, difficulty, addPoints);
      }}
      data-testid="correct-answer"
      value={alternative}
    />
  );
}

function renderWrongAnswer(alternative, incorrectAnswers, freezeTimer) {
  // Responsavel por renderizar a alternativa errada
  return (
    <input
      type="button"
      key={alternative}
      className="wrong"
      data-testid={`wrong-answer-${incorrectAnswers.indexOf(alternative)}`}
      onClick={() => {
        setColor(freezeTimer);
      }}
      value={alternative}
    />
  );
}

function renderQuestions(currentQuestion, timer, addPoints) {
  // Resposavel por renderizar as pergunta recebida.
  const {
    incorrect_answers: incorrectAnswers,
    correct_answer: correctAnswer,
    category,
    question,
    alternatives,
    difficulty,
  } = currentQuestion;

  return (
    <div>
      <h5 data-testid="question-category">{category}</h5>
      <h4 data-testid="question-text">{question}</h4>
      <div>
        {alternatives.map((alternative) => {
          if (alternative === correctAnswer) {
            return renderCorrectAnswer(alternative, timer, difficulty, addPoints);
          }
          return renderWrongAnswer(alternative, incorrectAnswers);
        })}
      </div>
    </div>
  );
}

class QuestionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      redirect: false,
    };
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
  }

  componentDidMount() {
    const { getQuestion, userToken } = this.props;
    return getQuestion(userToken);
  }

  goToNextQuestion() {
    const { counter } = this.state;
    if (counter < 4) {
      return this.setState((state) => ({ counter: state.counter + 1 }));
    }
    return this.setState({ redirect: true });
  }

  // setLocalStorage() {
  //   const { name , assertions, score, gravatarEmail } = this.
  // }

  render() {
    const {
      isFetching,
      questions,
      restoreTimer,
      timer,
      addPoints,
    } = this.props;
    const { counter, redirect } = this.state;
    if (isFetching || questions.length === 0) return <p>Loading...</p>;
    if (redirect) return <Redirect to="/ResultsPage" />;
    // if (time === 0) this.ableButtonNext();
    return (
      <div>
        <MainHeader />
        {renderQuestions(questions[counter], timer, addPoints)}
        {renderButtonNext(this.goToNextQuestion, restoreTimer)}
        <Timer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestion: (token) => dispatch(fetchQuestions(token)),
  restoreTimer: () => dispatch(restoreClock()),
  freezeTimer: () => dispatch(freezeClock()),
  addPoints: (score) => dispatch(addScore(score)),
  // setCounter: () => dispatch(ticTac()),
});

const mapStateToProps = (state) => ({
  timer: state.counterTimeReducer.counter,
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
  restoreTimer: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  addPoints: PropTypes.func.isRequired,
};
