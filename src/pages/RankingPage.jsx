import React from 'react';
import { Link } from 'react-router-dom';

class RankingPage extends React.Component {
  static rankingList() {
    const getUser = JSON.parse(localStorage.getItem('ranking')) || [];
    const sortUser = getUser.sort((a, b) => b.score - a.score);

    return (
      <div className="ranking-list">
        {sortUser.map(({ name, score, picture }, indice) => (
          <div className="list-items">
            <img src={picture} alt="pictureAvatar" />
            <p data-testid={`player-name-${indice}`}>{`${name}`}</p>
            <p data-testid={`player-score-${indice}`}>{` ${score}`}</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="title" data-testid="ranking-title">
            Ranking
          </h1>
          {RankingPage.rankingList()}
        </div>
        <div className="home-container">
          <Link to="/">
            <button className="home-btn" data-testid="btn-go-home" type="button">
              VOLTE AO INÍCIO!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default RankingPage;
