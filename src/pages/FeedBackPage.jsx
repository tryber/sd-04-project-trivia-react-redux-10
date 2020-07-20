import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const renderButtons = () => (
  <div>
    <div>
      <Link to="/ranking">
        <button
          type="button"
          className="feedback-button-ranking"
          data-testid="btn-ranking"
        >
          VER RANKING
        </button>
      </Link>
    </div>
    <div>
      <Link to="/">
        <button
          type="button"
          className="feedback-button-playagain"
          data-testid="btn-play-again"
        >
          JOGAR NOVAMENTE
        </button>
      </Link>
    </div>
  </div>
);

const feedbackPos = () => (
  <div>
    <h1 data-testid="feedback-text">Mandou bem!</h1>
  </div>
);

const feedbackNeg = () => (
  <div>
    <h1 data-testid="feedback-text">Podia ser melhor...</h1>
  </div>
);

const renderScore = (playerAnswers, playerScore) => (
  <div>
    <h2>
      Questões certas:
      {' '}
      <span data-testid="feedback-total-question">
        {' '}
        {playerAnswers}
      </span>
    </h2>
    <h2>
      Pontuação final:
      {' '}
      <span data-testid="feedback-total-score">
        {' '}
        {playerScore}
      </span>
    </h2>
  </div>
);

const renderFeedbackPage = (playerAnswers, playerScore) => (
  <div>
    {playerAnswers < 3 ? feedbackNeg() : feedbackPos()}
    {renderScore(playerAnswers, playerScore)}
  </div>
);

const renderHeaderScore = (playerName, playerScore, playerPicture) => (
  <header className="feedback-header">
    <div>
      <img
        data-testid="header-profile-picture"
        className="player-profile-picture-header"
        alt="player-profile"
        src={playerPicture}
      />
      <p data-testid="header-player-name">
        Jogador:
        <strong>{playerName}</strong>
      </p>
    </div>
    <div>
      <p>
        Pontos:
        <strong data-testid="header-score">{playerScore}</strong>
      </p>
    </div>
  </header>
);

class FeedbackPage extends Component {
  render() {
    const {
      playerAnswers,
      playerName,
      playerPicture,
      playerScore,
    } = this.props;
    return (
      <div className="header-container">
        {renderHeaderScore(playerName, playerScore, playerPicture)}
        <div className="score-container">
          {renderFeedbackPage(playerAnswers, playerScore)}
          {renderButtons()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playerName: state.loginReducer.name,
  playerPicture: state.gravatarReducer.picture,
  playerScore: parseFloat(state.loginReducer.score),
  playerAnswers: state.loginReducer.assertions,
});

export default connect(mapStateToProps)(FeedbackPage);
