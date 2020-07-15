import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div>
      {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>SUA VEZ</p>
          </header>
        </div> */}
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
