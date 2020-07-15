import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header.jsx'

class FeedBackPage extends Component {
  renderButtons() {
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

  render() {
    return (
      <div>
        {/* <Header /> */}
        {/* {this.Message()} */}
        {/* {this.assertions} */}
        {this.renderButtons()}
      </div>
    );
  }
}

export default FeedBackPage;
