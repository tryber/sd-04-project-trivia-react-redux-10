import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <label>
          E-mail do gravatar:<input data-testid="input-gravatar-email" type="e-mail"></input>
        </label>
        <label>
          Nome do Jogador:<input data-testid="input-player-name" type="text"></input>
        </label>
        <Link to="/perguntas">
          <button
            className="button-login"
            data-testid="btn-play"
            type="button"
          >JOGAR</button>
        </Link>
      </div>
    );
  }
}
