import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../actions/index';
import MainHeader from '../components/MainHeader'

// import Header from './Header.jsx'

class QuestionsPage extends Component {
  componentDidMount() {
    const { getQuestion, userToken } = this.props;
    return getQuestion(userToken);
  }

  render() {
    // const { TypeOfQuestion, QuestionText, Timer, Answer } = this.props;
    // const { questions } = this.state;
    const { isFetching, questions } = this.props;
    if (isFetching || questions.length === 0) return <p>Loading...</p>;
    return (
      <div>
        <MainHeader />
        {console.log(questions)}
        <div className="question-and-answer">
          <div className="question-box">
            {/* <h2 className="type-of-question"> {TypeOfQuestion}</h2> */}
            {/* <h1 className="question-text">{QuestionText}</h1> */}
            {/* <h1 className="timer">{Timer}</h1> */}
          </div>
          <div className="answer-box">
            <button className="answer" data-testid="btn-answer" type="button">
              {/* {Answer} */}
            </button>
            <Link to="/ResultsPage">
              <button className="button-next" data-testid="btn-next" type="button">
                PRÓXIMA
              </button>
            </Link>
          </div>
        </div>
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
