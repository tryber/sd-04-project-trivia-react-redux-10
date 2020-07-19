import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './App.css';
import QuestionsPage from './pages/QuestionsPage';
import FeedBackPage from './pages/FeedBackPage';
import RankingPage from './pages/RankingPage';
import SettingsPage from './pages/SettingsPage';

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
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
