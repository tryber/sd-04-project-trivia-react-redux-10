import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../components/MainHeader';

function renderButtons() {
  return (
    <div>
      <Link to="/ranking">
        <button data-testid="btn-ranking" type="button">
          Ver Ranking
        </button>
      </Link>
      <Link to="/">
        <button data-testid="btn-play-again" type="button">
          Jogar novamente
        </button>
      </Link>
    </div>
  );
}
class FeedBackPage extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        {/* {this.Message()} */}
        {/* {this.assertions} */}
        {renderButtons()}
      </div>
    );
  }
}

export default FeedBackPage;
