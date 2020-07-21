import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchToken, getUserData, gravatarImage } from '../actions/index';

// import GET_TOKEN from '../services/GET_TOKEN';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      avatar: '',
    };
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  changeEmail(e) {
    const hash = md5(e.target.value);
    this.setState({ email: e.target.value, avatar: hash });
  }

  isDisabled() {
    const { name, email } = this.state;
    if (name === '' || email === '') return true;
    return false;
  }

  clickToStartGame() {
    const { token, userData, setGravatar } = this.props;
    const { name, avatar, email } = this.state;
    token();
    userData(name, avatar, email);
    setGravatar(email);
    const storage = {
      player: {
        name,
        assertions: 0,
        score: 0,
        gravatarEmail: email,
      },
    };
    localStorage.setItem('state', JSON.stringify(storage));
  }

  renderNameInput() {
    const { name } = this.state;
    return (
      <div>
        <label htmlFor="name">Nome do Jogador:</label>
        <input
          type="text"
          data-testid="input-player-name"
          id="name"
          onChange={(e) => this.changeName(e)}
          value={name}
        />
      </div>
    );
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <div>
        <label htmlFor="email">E-mail do Gravatar:</label>
        <input
          type="email"
          data-testid="input-gravatar-email"
          id="email"
          onChange={(e) => this.changeEmail(e)}
          value={email}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="login-area">
        {this.renderNameInput()}
        {this.renderEmailInput()}
        <Link to="/perguntas">
          <button
            type="button"
            className="btn-play"
            data-testid="btn-play"
            onClick={() => this.clickToStartGame()}
            disabled={this.isDisabled()}
          >
            JOGAR
          </button>
        </Link>
        <Link to="/settings">
          <button type="button" className="btn-settings" data-testid="btn-settings">
            Configurações
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  token: () => dispatch(fetchToken()),
  userData: (name, avatar, email) => dispatch(getUserData(name, avatar, email)),
  setGravatar: (picture) => dispatch(gravatarImage(picture)),
});

export default connect(null, mapDispatchToProps)(LoginPage);

LoginPage.propTypes = {
  token: PropTypes.func.isRequired,
  userData: PropTypes.func.isRequired,
  setGravatar: PropTypes.func.isRequired,
};
