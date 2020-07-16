import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import './App.css';
import QuestionsPage from './components/QuestionsPage';
import FeedBackPage from './components/FeedBackPage';
import RankingPage from './components/RankingPage';

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
          <Route exact path="/perguntas">
            <QuestionsPage />
          </Route>
          <Route exact path="/ResultsPage">
            <FeedBackPage />
          </Route>
          <Route exact path="/ranking">
            <RankingPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
