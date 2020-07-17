import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default class mainHeader extends Component {
  render() {
    const store = createStore(rootReducer)
    return (
      <div className="Default-Header">
        <Provider store={store}>
          <div className="Avatar-and-Name">
            <img className="Avatar-Picture" src={store.player.avatar} alt="User avatar" />
            <h3 className="Name">{store.player.name}</h3>
          </div>
          <h3 className="Points">{store.player.score}</h3>
        </Provider>
      </div>
    );
  }
}
