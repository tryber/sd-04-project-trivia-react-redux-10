import React from 'react';
import { Link } from 'react-router-dom';

class RankingPage extends React.Component {
  /*  static rankingList() {
    const playerGravatar = (picture) => <img src={picture} alt="Gravatar" />;
    const getUser = local storage;
    const sortUser = getUser.sort((a, b) => b.score - a.score);

    return (
      <ul className="ranking-list">
        {sortUser.map(({ name, score, picture }, indice) => {
          const index = indice + 1;
          return (
            <li className="list-items">
              {playerGravatar(picture)}
              <p data-testid={`player-name-${index}`}>{`${name}`}</p>
              <p data-testid={`player-score-${index}`}>{` ${score}`}</p>
            </li>
          );
        })}
      </ul>
    );
  }*/

  render() {
    return (
      <div>
        <div>
          <h1 className="title" data-testid="ranking-title">
            Ranking
          </h1>
          {/* {rankingList()} */}
        </div>
        <div className="home-container">
          <Link to="/">
            <button
              className="home-btn"
              data-testid="btn-go-home"
              type="button"
            >
                VOLTE AO INÍCIO!
                </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default RankingPage;