import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import './App.css';

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
