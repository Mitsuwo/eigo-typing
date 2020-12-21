/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import { HomeComponent } from './containers/HomeContainer';
import { TypingComponent } from './containers/TypingComponent';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/typing" component={TypingComponent} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
