import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SettingsPage extends Component {
  render() {
    return (
      <div>
        <h2 data-testid="settings-title">Configurações</h2>
        <Link to="/">
          <button type="button">
            Tela Inicial
          </button>
        </Link>
      </div>
    );
  }
}
