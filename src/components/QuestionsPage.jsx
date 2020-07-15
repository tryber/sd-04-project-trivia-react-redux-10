import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header.jsx'

export default class QuestionsPage extends Component {
  render() {
      const { TypeOfQuestion, QuestionText, Timer, Answer } = this.props
    return (
      <div>
        {/* <Header /> */}
        <div className='question-and-answer'>
          <div className='question-box'>
            <h2 className='type-of-question'> {TypeOfQuestion}</h2>
            <h1 className='question-text'>{QuestionText}</h1>
            <h1 className='timer'>{Timer}</h1>
          </div>
          <div className='answer-box'>
            <button
              className='answer'
              data-testid='btn-answer'
              type='button'>
              { Answer }
            </button>
            <Link to='/ResultsPage'>
              <button
                className='button-next'
                data-testid='btn-next'
                type='button'>
                "PRÓXIMA"
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
